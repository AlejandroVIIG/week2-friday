const { findAll, findOne, create, destroy, update } = require("../controllers/song.controller");
const express = require("express");

const songRouter = express.Router();

songRouter.route("/")
          .get(findAll)
          .post(create);

songRouter.route("/:id")
          .get(findOne)
          .put(update)
          .delete(destroy);

module.exports = songRouter;