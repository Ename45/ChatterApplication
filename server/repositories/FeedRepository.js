const prisma = require("../prisma/index.js");



const createFeed = async (req, res) => {
  const { title, content, image, userId } = req.body;

  try {
    const result = await prisma.feed.create({
      data: {
        title,
        content,
        image,
        userId
      },
    });

    if (!result) {
      return res.status(404).json({error: "Error creating feed. Title and content required "})
    }

    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const findAllFeeds = async (req, res) => {
  try {
    const allFeeds = await prisma.feed.findMany({
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            profession: true,
            profileImage: true,
          },
        },
      }
    });

    if (allFeeds.length === 0) {
      return res.status(404).json({ error: "No available tweet" });
    }

    res.json(allFeeds);
  } catch (error) {
    console.error("Error fetching feeds:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};



const findOneFeed = async (req, res) => {
  const { id } = req.params;
  try {
    const feed = await prisma.feed.findUnique({
      where: {
        id: id,
      },
      include: {
        user: true
      }
    });

    if (!feed) {
      return res.status(404).json({ error: "Feed not found" });
    }

    res.json(feed);
  } catch (error) {
    console.error("Error fetching feed:", error);
    return res.status(500).json({ error: error });
  }
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
    const feedToDelete = await prisma.feed.delete({
      where: {
        id: id,
      },
    });

    if (!feedToDelete) {
      return res.status(404).json({error: "No such tweet exists"})
  }

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
