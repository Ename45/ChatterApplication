const express = require("express");
const router = express.Router();
const FeedController = require('../controller/FeedController')
const SessionCheck = require('../middleware/CheckSession')


router.post("/", SessionCheck.checkSession, FeedController.sendPost);

router.get("/", SessionCheck.checkSession, FeedController.findAllPosts);

router.get("/:id", FeedController.findOnePost);

// router.put("/:id", FeedService.updatePost);

router.delete("/:id", FeedController.deleteAPost);



module.exports = router;
