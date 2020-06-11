const {Bookmark} = require('../models')

module.exports = {
    async index (req, res) {
      try {
        const {songId, userId} = req.query
        const bookmark = await Bookmark.findOne({
          where: {
            SongId: songId,
            UserId: userId
          }
        })
        console.log('bookmark', bookmark)
        res.send(bookmark)
        console.log("we are at bookmark")
      } catch (err) {
        res.status(500).send({
          error: 'an error has occured trying to fetch the bookmark'
        })
      }
    },
    async post (req, res) {
      try {
        const bookmark = req.body
        await Bookmark.create(bookmark)
        res.send(bookmark)
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