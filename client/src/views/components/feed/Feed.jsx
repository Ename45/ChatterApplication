import React, { useState } from 'react'
import { feedList } from './feedList'
import book from '../../../assets/images/svg/book.svg'
import comment from '../../../assets/images/svg/comment.svg'
import likes from '../../../assets/images/svg/likes.svg'
import views from '../../../assets/images/svg/views.svg'

const Feed = () => {

  const [feeds, setFeeds] = useState(feedList);

  console.log(feeds)


  return (
    <div className="twits">
      {feeds.map((feed) =>(
        <div className='feed-place' key={feed.id}>
          <div className="profile">
            <img src={feed.profileImage} alt="grace" />
            <div className="description">
              <h1>{feed.fullName}</h1>
              <p>{feed.role} <span>{feed.datePublished}</span> </p>
            </div>
          </div>    
          <div className="title-time-container">
            <h1>{feed.title}</h1> 
            <div className="read-time">
              <img src={book} alt="" />
              <p>{feed.minutesRead}</p>
            </div>
          </div>   
          <div className="post-content">
            <p>{feed.post}</p>
            <img src={feed.anyImage} alt="" />
          </div>  
          <div className="interactions">
            <div className="comments">
              <img src={comment} alt="" />
              <p>{feed.comment}</p>
            </div>
            <div className="like">
              <img src={likes} alt="" />
              <p>{feed.likes}</p>
            </div>
            <div className="viewed">
              <img src={views} alt="" />
              <p>{feed.views}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Feed