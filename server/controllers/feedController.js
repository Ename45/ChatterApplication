const Feed = require("../models/feedModel");
const mongoose = require('mongoose')

const getAllFeeds = async(req, res) =>{
  const feeds = await Feed.find({}).sort({createdAt: -1})

  res.status(200).json(feeds)
}


const getFeedById = async(req, res) => {
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({ error: "Feed not found" })
  }

  const foundWorkout = await Feed.findById(id)

  if(!foundWorkout){
    return res.status(404).json({error: "Feed not found"})
  }

  res.status(200).json(foundWorkout)
}



const createFeed = async (req, res) =>{
  const { title, post } = req.body;

  try {
    const feed = await Feed.create({ title, post });
    res.status(200).json(feed);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


const deleteFeedById = async(req, res)=>{
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such feed"})
  }

  const deletedFeed = await Feed.findByIdAndDelete(id)

  if (!deletedFeed){
    return res.status(404).json({error: "Feed not found"})
  }

  res.status(200).json({mssg: "feed deleted"})
}

const updateFeed = async(req, res) =>{
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such feed" });
  }

  const feedToUpdate = await Feed.findByIdAndUpdate(id, {...req.body})

  if (!feedToUpdate) {
    return res.status(404).json({ error: "Feed not found" });
  }

  res.status(200).json(feedToUpdate)
}


module.exports = {
  getAllFeeds,
  getFeedById,
  createFeed,
  deleteFeedById,
  updateFeed
};