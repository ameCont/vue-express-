const {
  History,
  Song,
  User
} = require('../models')
const _ = require('lodash')
module.exports = {
  async index (req, res) {
    try {
      const UserId = req.user.id
      const histories = await History.findAll({
        where: {
          UserId: UserId
        },
        include: [
          {
            model: Song
          }
        ]
      }).map(history => history.toJSON())
        .map(history => _.extend(
          {},
          history.Song,
          history
        ))
      res.send(_.uniqBy(histories, history => history.SongId))
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the history'
      })
    }
  },
  async post (req, res) {
    try {
      const UserId = req.user.id
      const {SongId} = req.body
      const history = await History.create({
        SongId: SongId,
        UserId: UserId
      })
      res.send(history)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the history object'
      })
    }
  }
}