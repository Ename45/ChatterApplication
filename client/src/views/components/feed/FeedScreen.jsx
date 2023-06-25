import React from 'react'
import '../../../styles/components/feed/feedScreen.css'
import Feed from './Feed'


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
            <h1>FEED</h1>
            <p>Explore different content you'd love</p>
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