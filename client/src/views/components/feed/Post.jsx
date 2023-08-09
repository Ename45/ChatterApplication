import React from 'react'

const Post = (props) => {
  const { title, image, content } = props
  return (
    <div className='main-post-container'>
      <div className="inner-post-container">
        <div className="post-heading">
          <h1>{title}</h1> 
        </div>
        <div className="post-content">
          <p>{content}</p>
        </div>
        <div className="post-image">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Post