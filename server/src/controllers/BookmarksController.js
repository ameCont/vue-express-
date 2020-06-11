const {Bookmark} = require('../models')

module.exports = {
    async index (req, res) {
      try {
        const {songId, userId} = req.query
        const bookmarks = await Bookmark.findAll({
          where: {
            SongId: songId,
            UserId: userId
          }
        })
        res.send(bookmarks)
      } catch (err) {
        res.status(500).send({
          error: 'an error has occured trying to fetch the bookmark'
        })
      }
    },
    async post (req, res) {
      try {
        const bookmark = req.query
        const newBookmark = await Bookmark.create(bookmark)
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