const express = require('express')
const {createFeed, getAllFeeds, getFeedById, deleteFeedById, updateFeed} = require("../controllers/feedController");


const router = express.Router()


router.get('/', getAllFeeds)
router.get('/:id', getFeedById)
router.post('/', createFeed)
router.delete('/:id', deleteFeedById)
router.patch('/:id', updateFeed)




module.exports = router