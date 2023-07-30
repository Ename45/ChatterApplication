const prisma = require("../prisma/index.js");



const createFeed = async (req, res) => {
  const { title, content, image } = req.body;

  try {
    const result = await prisma.feed.create({
      data: {
        title,
        content,
        image,
      },
    });
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const findAllFeeds = async (req, res) => {
  const allFeeds = await prisma.feed.findMany();

  res.json(allFeeds);
};


const findOneFeed = async (req, res) => {
  const { id } = req.params;
  const Feed = await prisma.feed.findUnique({
    where: { 
      id: id
    },
  });
  res.json(Feed);
};

const updateFeed = async (req, res) => {
  const { id } = req.params;
  const { title, content, image } = req.body;

  try {
    const updatedData = await prisma.feed.update({
      where: {
        id: id,
      },
      data: {
        title,
        content,
        image,
      },
    });
    res.json(updatedData);
  } catch (error) {
    res.status(400).json({ error: "failed to update Feed" });
  }
};

const deleteAFeed = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.feed.delete({
      where: {
        id: id,
      },
    });
    res.status(200);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createFeed,
  findOneFeed,
  findAllFeeds,
  updateFeed,
  deleteAFeed,
};
