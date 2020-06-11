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
          error: 'an error has occured trying to fetch the songs'
        })
      }
    }
}