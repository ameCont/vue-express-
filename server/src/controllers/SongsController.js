const {Song} = require('../models')

module.exports = {
    async index (req, res) {
        try {
          const songs = Song.findAll({
            limit: 10
          })
          res.send(songs)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to fetch the songs'
          })
        }
    },
    async post (req, res) {
      try {
        const song = Song.create(req.body)
        res.send(song)
      } catch (error) {
        res.status(500).send({
          error: 'an error has occured trying to create the songs'
        })
      }
    }
}