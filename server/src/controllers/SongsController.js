const {Song} = require('../models')

module.exports = {
    async index (req, res) {
        try {
         const songs = await Song.findAll({
          // const songs = Song.findAll({
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
    async show (req, res) {
      try {
       console.log('show s')
       console.log(req.params.songId)
       const song = await Song.findByPk(req.params.songId)
       console.log('song no ')
       //console.log(song)
       res.send(song)
      } catch (err) {
        res.status(500).send({
          error: 'an error has occured trying to show the songs'
        })
      }
    },
    async post (req, res) {
      try {
        const song = await Song.create(req.body)
        //const song = Song.create(req.body)
        console.log("we are here post")
        res.send(song)
      } catch (err) {
        console.log("we are here post", err)
        res.status(500).send({
          error: 'an error has occured trying to create the song'
        })
      }
    },
    async put (req, res) {
      try {
        const song = await Song.update(req.body, {
          where: {
            id: req.params.songId
          }
        })
        //const song = Song.create(req.body)
        console.log("we are here put")
        res.send(req.body)
      } catch (err) {
        res.status(500).send({
          error: 'an error has occured trying to update the song'
        })
      }
    }
}