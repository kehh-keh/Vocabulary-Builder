const express = require("express");

const router = express.Router();

const wordController = require("../controllers/wordController");

router.get("/", wordController.getWords);

router.post("/", wordController.addWord);

router.delete("/:id", wordController.deleteWord);

module.exports = router;