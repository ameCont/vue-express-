const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, options) {
    const SALT_FACTOR = 8
    console.log('hashPassword')

    if (!user.changed('password')) {
        return;
    }

    return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
        user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    }, {
        hooks: {
            beforeSave: hashPassword
        }
    })

    User.prototype.comparePassword = function (password) {
        console.log('parola initial '+password)
        return bcrypt.compareAsync(password, this.password)
        //const cript = bcrypt.compareAsync(password, this.password);
        //console.log('parola criptata '+cript)
    }

    return User
}