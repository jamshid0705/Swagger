const express = require("express");
const Rout = express.Router();
const bookController = require("../controller/book");

Rout.route("/").get(bookController.getAll).post(bookController.add);
Rout.route("/:id")
  .get(bookController.getOne)
  .delete(bookController.deleteBook)
  .patch(bookController.update);


module.exports=Rout