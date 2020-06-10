const {
    sequelize,
    Song,
    User
} = require('./models')

const Promise = require('bluebird')
const songs = require('./songs.json')
const users = require('./users.json')

sequelize.sync({force: true})
    .then(async function {
      await Promise.all(
        users.map(user => {
          User.creat(user)
      })
    )

      await Promise.all(
        songs.map(song => {
          Song.creat(song)
        })
      )
    })