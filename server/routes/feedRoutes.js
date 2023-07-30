const express = require("express");
const router = express.Router();
const { createFeed, findOneFeed, findAllFeeds, updateFeed, deleteAFeed, } = require("../repositories/FeedRepository");

router.post("/", createFeed);

router.get("/", findAllFeeds);

router.get("/:id", findOneFeed);

router.put("/:id", updateFeed);

router.delete("/:id", deleteAFeed);



module.exports = router;
