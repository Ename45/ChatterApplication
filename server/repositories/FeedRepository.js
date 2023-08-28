const prisma = require("../prisma/index.js");



const createPost = async ( postData ) => {
  const { title, content, image, userId } = postData;

  try {
    const result = await prisma.feed.create({
      data: {
        title,
        content,
        image,
        userId: userId,
      },
    });

    if (!result) {
      throw new Error("Error creating post. Title and content required");
    }

    return {
      data: result,
      message: "Post Created Successfully",
    };
  } catch (error) {
    throw new Error(error.message);
  }
};


const findAllPosts = async () => {
  try {
    const allPosts = await prisma.feed.findMany({
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

    if (allPosts.length === 0) {
      return "No available tweet";
    }

    return {
      data: allPosts,
      message: "Post Created Successfully",
    };
  } catch (error) {
    throw error;
  }
};



const findOnePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await prisma.feed.findUnique({
      where: {
        id: id,
      },
      include: {
        user: true
      }
    });

    if (!post) {
      return res.status(404).json({ error: "post not found" });
    }

    res.json(post);
  } catch (error) {
    console.error("Error fetching post:", error);
    return res.status(500).json({ error: error });
  }
};

const updatePost = async (req, res) => {
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
    res.status(400).json({ error: "failed to update post" });
  }
};

const deleteAPost = async (req, res) => {
  const { id } = req.params;
  try {
    const postToDelete = await prisma.feed.delete({
      where: {
        id: id,
      },
    });

    if (!postToDelete) {
      return res.status(404).json({error: "No such tweet exists"})
  }

    res.status(200);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createPost,
  findOnePost,
  findAllPosts,
  updatePost,
  deleteAPost,
};
