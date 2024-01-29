const { findAll, findOne, update, create, destroy } = require("../controllers/user.controller");
const express = require("express");

const userRouter = express.Router();

userRouter.route("/")
          .get(findAll)
          .post(create);

userRouter.route("/:id")
          .get(findOne)
          .put(update)
          .delete(destroy);

module.exports = userRouter;