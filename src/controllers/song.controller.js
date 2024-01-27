const catchError = require("../utils/catchError");
const Song = require("../models/Song");

const findAll = catchError(async (req, res) => {
    const songs = await Song.findAll();
    return res.json(songs);
})

const findOne = catchError(async (req, res) => {
    const {id} = req.params;
    const song = await Song.findByPk(id);

    if(!song) return res.sendStatus(404);
    return res.json(song);
});

const create = catchError(async (req, res) => {
    const {name, artist, genre, releaseDate} = req.body;
    const newSong = {
        name,
        artist,
        genre,
        releaseDate
    }

    const song = await Song.create(newSong);
    return res.status(201).json(song);
});

const destroy = catchError(async (req, res) => {
    const {id} = req.params;
    const song = await User.findByPk(id);

    if(!song) res.sendStatus(404);

    await song.destroy();
    return res.send(`Song with id: ${id} was deleted`).status(204);
});

const update = catchError(async (req, res) => {
    const {id} = req.params;
    const {name, artist, genre, releaseDate} = req.body;
    const newData = {name, artist, genre, releaseDate};

    const song = await Song.findByPk(id);
    if(!song) res.sendStatus(404);

    const updatedSong = await song.update(newData);
    return res.send(updatedSong);
});

module.exports = {
    findOne,
    findAll,
    create,
    destroy,
    update
}