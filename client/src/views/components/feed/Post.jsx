import React from 'react'
import book from '../../../assets/images/svg/book.svg'
import comment from '../../../assets/images/svg/comment.svg'
import likes from '../../../assets/images/svg/likes.svg'
import views from '../../../assets/images/svg/views.svg'
import '../../../styles/components/feed/post.css'

const Post = (props) => {
  const { user:{ firstName, lastName, profession }, title, image, content, updatedAt } = props
  return (
    <div className='main-post-container'>
      <div className="inner-post-container">
        <div className="profile-intro">
          <div className="profile-image">
            <p>Profile Image<img src={image} alt="" /></p>
          </div>
          <div className="brief-intro">
            <h2>{firstName} {lastName}</h2>
            <p>{profession}.  {new Date(updatedAt).toDateString()}</p>
          </div>          
        </div>
        <div className="post-content">
            <div className="post-title">
              <h1>{title}</h1>
            </div>
            <div className="mins-read">
              <div className="mins-read-image">
                <img src={book} alt="" /> 
              </div>
              <div className="mins-read-content">
                <p>10 mins read</p>
              </div>
            </div>
            <div className="post-text">
              <p>{content} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, beatae hic error voluptatem ullam vel voluptatum culpa odit quis ducimus laudantium quos facilis, optio dignissimos nulla, obcaecati quaerat nostrum? Totam dolores sunt eius modi laudantium dolorum, dicta error iure soluta sequi placeat veritatis ad maxime in est ut temporibus at!</p>
            </div>
            <div className="post-image">
              <img src={image} alt="" />
            </div>
          </div>
          <div className="impressions">
            <div className="inner-flex">
              <div className="comment-image">
                <img src={comment} alt="" />
              </div>
              <div className="comment-total">
                <p>200</p>
              </div>
            </div>
            <div className="inner-flex">
              <div className="likes-image">
                <img src={likes} alt="" />
              </div>
              <div className="likes-total">
                <p>120</p>
              </div>
            </div>
            <div className="inner-flex">
              <div className="views-image">
                <img src={views} alt="" />
              </div>
              <div className="views-total">
                <p>2980 views</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Post