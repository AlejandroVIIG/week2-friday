const express = require('express');
const songRouter = require('./song.router');
const userRouter = require('./user.router');
const router = express.Router();

// colocar las rutas aquí
router.use("/songs", songRouter);
router.use("/users", userRouter);

module.exports = router;