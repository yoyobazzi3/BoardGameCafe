const express = require("express");
const router = express.Router();
const boardGameController = require("../controllers/boardGameController");

router.get("/", boardGameController.getAllBoardGames);
router.post("/", boardGameController.createBoardGame);
router.get("/:id", boardGameController.getBoardGameById);
router.put("/:id", boardGameController.updateBoardGame);
router.delete("/:id", boardGameController.deleteBoardGame);

module.exports = router;
