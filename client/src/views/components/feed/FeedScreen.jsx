import React from 'react'
import '../../../styles/components/feed/feedScreen.css'
import Feed from '../feed/Feed'
import pencil from '../../../../src/assets/images/svg/pencil.svg'
import {Link} from 'react-router-dom'


const FeedScreen = () => {
  
  return (
    <div className="feed-main-container">
      <aside>
        <div className="aside-header">
          <h1>CHATTER</h1>
        </div>
      </aside>
      <header>
        <h1>HEADER</h1>
      </header>
      <section>
        <div className="section-inner-container">
          <div className="section-header">
            <div className="section-header-1">
              <h1>FEED</h1>
              <p>Explore different content you'd love</p>
            </div>
            <div className="post-content">
              <Link to='/createPost'>
                <button><img src={pencil} alt="" />Post a content</button>              
              </Link>
            </div>
          </div>
          <div className="section-navbar">
            <ul>
              <li><h1>For you</h1></li>
              <li><h1>Featured</h1></li>
              <li><h1>Recent</h1></li>
            </ul>
          </div>
          <div className="main-content">
            <Feed/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeedScreen