const express = require("express");
const {
  sendMessage,
  allMessage,
} = require("../controllers/messageControllers");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", protect, sendMessage);
router.get("/:chatId", protect, allMessage);

module.exports = router;
