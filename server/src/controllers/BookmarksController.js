const {
  Bookmark,
  Song,
  User
} = require('../models')
const _ = require('lodash')
module.exports = {
  async index (req, res) {
    try {
      const UserId = req.user.id
      const {SongId} = req.query
      const where = {
        UserId: UserId
      }
      if (SongId) {
        where.SongId = SongId
      }
      const bookmarks = await Bookmark.findAll({
        where: where,
        include: [
          {
            model: Song
          }
        ]
      }).map(bookmark => bookmark.toJSON())
        .map(bookmark => _.extend(
          {},
          bookmark.Song,
          bookmark
        ))
      res.send(bookmarks)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the bookmark'
      })
    }
  },
  async post (req, res) {
    try {
      //const SongId = req.body.params.SongId
      //const UserId = req.body.params.UserId
      const {SongId, UserId} = req.body
      console.log('songId POST run: ',SongId)
      console.log('userId POST: ',UserId)
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: SongId,
          UserId: UserId
        }
      })
      if (bookmark) {
        return req.status(400).send({
          error: 'You already have this set as a bookmark'
        })
      }
      const newBookmark = await Bookmark.create({
        SongId: SongId,
        UserId: UserId
      })
      // console.log('bookmark: ',bookmark)
      res.send(newBookmark)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the bookmark'
      })
    }
  },
  async delete (req, res) {
    try {
      const {bookmarkId} = req.params
      const bookmark = await Bookmark.findByPk(bookmarkId)
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to delete the bookmark'
      })
    }
  }
}