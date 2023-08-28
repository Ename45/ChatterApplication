const FeedRepository = require('../repositories/FeedRepository')

const sendPost = async(request, userId) => {
  const { title, content, image } = request


  if (!(title && content && userId)) {
    throw new Error('Title and content and user required')
  }

  postData = {
    title, content, image, userId
  }

  const newPost = await FeedRepository.createPost(postData)

  return newPost.data
}

const findOnePost = async() => {

}

const findAllPosts = async() => {
  const allPosts = await FeedRepository.findAllPosts()
  return{
    data: allPosts.data,
    message: allPosts.message
  }

  // if (allPosts.length === 0) {
  //   return res.status(404).json({ error: "No available tweet" });
  // }

  // catch (error) {
  //   console.error("Error fetching posts:", error);
  //   return res.status(500).json({ error: "Internal server error" });
  // }
}

const updatePost = async() => {

}

const deleteAPost = async() => {

}


module.exports = {
  sendPost,
  findOnePost,
  findAllPosts,
  updatePost,
  deleteAPost
}