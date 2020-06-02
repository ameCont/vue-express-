module.exports = (app) => {
    app.post('/register', (req,res) => {
        console.log('routes')
        res.send({
            message: `Hello ${req.body.email}! Your user was registered. Have fun!`
        })
        console.log('messageRouts')
    })
}