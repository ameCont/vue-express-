const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')

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

    // app.post('/songs',
    app.post('/songs',
        SongsController.post)
}