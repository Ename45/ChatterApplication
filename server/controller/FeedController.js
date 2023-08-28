const FeedService = require('../services/FeedService')


const sendPost = async ( req, res) => {
  const { userId } = req.userData
  console.log('userId in feed controller===>', userId);
  try {
    const post = await FeedService.sendPost(req.body, userId);
    return res.json(post)
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const findOnePost = async ( req, res) => {
  try {
    const foundPost = await FeedService.findOnePost(req.body);
    return res.json(foundPost)
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const findAllPosts = async (req, res) => {
  try {
    const allPosts = await FeedService.findAllPosts();
    return res.json(allPosts.data)
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const updatePost = async ( req, res) => {
  try {
    const updatedPost = await FeedService.updatePost(req.body);
    return res.json(updatedPost)
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const deleteAPost = async ( req, res) => {
  try {
    const message = await FeedService.deleteAPost(req.body);
    return res.json(message)
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}


module.exports = {
  sendPost,
  findOnePost,
  findAllPosts,
  updatePost,
  deleteAPost
}