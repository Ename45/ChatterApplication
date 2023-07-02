const Feed = require("../models/feedModel");
const mongoose = require("mongoose");

const getAllFeeds = async (req, res) => {
  try {
    const feeds = await Feed.find({}).sort({ createdAt: -1 });
    res.status(200).json(feeds);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getFeedById = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Feed not found" });
    }

    const foundFeed = await Feed.findById(id);

    if (!foundFeed) {
      return res.status(404).json({ error: "Feed not found" });
    }

    res.status(200).json(foundFeed);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createFeed = async (req, res) => {
  const { title, post } = req.body;

  try {
    const feed = await Feed.create({ title, post });
    res.status(201).json(feed);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteFeedById = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such feed" });
    }

    const deletedFeed = await Feed.findByIdAndDelete(id);

    if (!deletedFeed) {
      return res.status(404).json({ error: "Feed not found" });
    }

    res.status(200).json({ message: "Feed deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateFeed = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such feed" });
    }

    const feedToUpdate = await Feed.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    if (!feedToUpdate) {
      return res.status(404).json({ error: "Feed not found" });
    }

    res.status(200).json(feedToUpdate);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllFeeds,
  getFeedById,
  createFeed,
  deleteFeedById,
  updateFeed,
};