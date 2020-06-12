const {Bookmark} = require('../models')
const { Op } = require('sequelize');

module.exports = {
  async index (req, res) {
    try {
      // const {songId, userId} = req.query
      const songId = req.query.songId
      const userId = req.query.userId
      console.log('songId: ', songId)
      console.log('userId: ', userId)
      /*
      const songId = req.body.params.songId
      const userId = req.body.params.userId
      */
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the bookmark'
      })
    }
  },
  async post (req, res) {
    try {
      //const bookmark = req.body
      const {songId, userId} = req.body

      // const songId = req.body.params.songId
      // const userId = req.body.params.userId
      console.log('songId: ', songId)

      const bookmark = await Bookmark.findOne({

        where: {
          SongId: songId,
          UserId: userId
        }
      })
      if (bookmark) {
        return res.status(400).send({
          error: 'you already have this set as a bookmark'
        })
      }
      const newBookmark = await newBookmark.create({
        SongId: songId,
        UserId: userId
      })

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