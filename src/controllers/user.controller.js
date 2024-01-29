const catchError = require("../utils/catchError");
const User = require("../models/User");
const encrypt = require("../utils/handleBcrypt");

const findAll = catchError(async (req, res) => {
    const users = await User.findAll();
    return res.json(users);
});

const findOne = catchError(async (req, res) => {
    const {id} = req.params;
    const user = await User.findByPk(id);

    if(!user) return res.sendStatus(404);
    return res.json(user);
});

const create = catchError(async (req, res) => {
    const {firstName, lastName, email, password, birthday} = req.body;
    const hashPassword = await encrypt(password);
    const newUser = {
        firstName,
        lastName,
        email,
        birthday,
        password: hashPassword

    }

    const user = await User.create(newUser);
    return res.status(201).json(user);

})

const update = catchError(async (req, res) => {
    const {id} = req.params;
    const user = await User.findByPk(id);

    if(!user) return res.sendStatus(404);

    const {firstName, lastName, email, password, birthday} = req.body;
    const hashPassword = await encrypt(password);
    const newUser = {
        firstName,
        lastName,
        email,
        birthday,
        password: hashPassword
    }

    const updatedUser = await user.update(newUser);
    return res.send(updatedUser);
});

const destroy = catchError(async (req, res) => {
    const {id} = req.params;
    const user = await User.findByPk(id);

    if(!user) return res.sendStatus(404);

    await user.destroy();
    return res.send(`User with id: ${id} was deleted.`).send(204);
});

module.exports = {
    findAll,
    findOne,
    create,
    update,
    destroy
}