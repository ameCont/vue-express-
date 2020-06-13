const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')
const HistoriesController = require('./controllers/HistoriesController')
const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {
    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)
        console.log('messageRouts')

    app.post('/login',
        AuthenticationController.login)
        console.log('loginMessage')

    app.get('/songs',
        SongsController.index)

    app.get('/songs/:songId',
        SongsController.show)

    app.put('/songs/:songId',
        SongsController.put)
    //console.log('routes.js')
    console.log('songId')

    // app.post('/songs',
    app.post('/songs',
        SongsController.post)

    app.get('/bookmarks',
        isAuthenticated,
        BookmarksController.index)

    app.post('/bookmarks',
        BookmarksController.post)

    app.delete('/bookmarks/:bookmarkId',
        BookmarksController.delete)

    app.get('/histories',
        HistoriesController.index)

    app.post('/histories',
        HistoriesController.post)
}