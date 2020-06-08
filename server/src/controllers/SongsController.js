const {Song} = require('../models')

module.exports = {
    async index (req, res) {
        try {
          // const songs = await Song.findAll({
          const songs = Song.findAll({
            limit: 10
          })
          res.send(songs)
          console.log("we are at index")
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to fetch the songs'
          })
        }
    },
    async post (req, res) {
      try {
        // const song = await Song.create(req.body)
        const song = Song.create(req.body)
        console.log("we are here")
        res.send(song)
      } catch (err) {
        console.log("we are here", err)
        res.status(500).send({
          error: 'an error has occured trying to create the song'
        })
      }
    }
}