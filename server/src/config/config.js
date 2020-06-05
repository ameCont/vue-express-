module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'vue',
        user: process.env.DB_USER || 'vue',
        password: process.env.DB_PASS|| 'vue',
        options: {
            dialect: process.env.DB_DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './vue.sqlite'
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}