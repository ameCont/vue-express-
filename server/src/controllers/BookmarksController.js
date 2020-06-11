const {Bookmark} = require('../models')
const { Op } = require('sequelize');

module.exports = {
    async index (req, res) {
      try {
        let songs = null
        const search = req.query.search
        if (search) {
          songs = await Song.findAll({
            where: {
              [Op.or]: [
                'title', 'artist', 'genre', 'album'
              ].map(key => ({
                [key]: {
                  [Op.like]: `%${search}%`
                }
              }))
            }
          })
        } else {
          songs = await Song.findAll({
            // const songs = Song.findAll({
            limit: 10
          })
        }
        res.send(songs)
        console.log("we are at index")
      } catch (err) {
        res.status(500).send({
          error: 'an error has occured trying to fetch the songs'
        })
      }
    }
}