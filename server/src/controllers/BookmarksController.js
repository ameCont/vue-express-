const {
  Bookmark,
  Song,
  User
} = require('../models')
const _ = require('lodash')
module.exports = {
  async index (req, res) {
    try {
      const {songId, userId} = req.query
      console.log('songId POST: ',songId)
      console.log('userId POST: ',userId)
      const where = {
        UserId: userId
      }
      if (songId) {
        where.SongId = songId
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
      const {songId, userId} = req.body
      console.log('songId POST: ',songId)
      console.log('userId POST: ',userId)
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      if (bookmark) {
        return req.status(400).send({
          error: 'You already have this set as a bookmark'
        })
      }
      const newBookmark = await Bookmark.create(req.body)
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