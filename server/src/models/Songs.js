module.exports = (sequelize, DataTypes) => {
    const Song = sequelize.define('Song', {
        title: DataTypes.STRING,
        artist: DataTypes.STRING,
        genre: DataTypes.STRING,
        album: DataTypes.STRING,
        albumImage: DataTypes.STRING,
        youtubeId: DataTypes.STRING,
        lyrics: DataTypes.STRING,
        tab: DataTypes.STRING
    })
    return Song
}