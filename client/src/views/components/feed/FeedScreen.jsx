import React, { useEffect, useState } from 'react'
import '../../../styles/components/feed/feedScreen.css'
import pencil from '../../../../src/assets/images/svg/pencil.svg'
import {Link} from 'react-router-dom'
import Post from './Post'


const FeedScreen = () => {

  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    allFeeds();
  }, []);

  const allFeeds = async () => {
    await fetch("http://localhost:3000/api/1.0/chatter/feeds/")
      .then((response) => response.json())
      .then((data) => {
        setAllPosts(data);
        console.log(data);
      })

      .catch((error) => console.error(error));
  };



  // useEffect(() => {
  //   const loadStudents = async() => {
  //     const response = await axios.get("http://localhost:8080/students"
  //     );
  //     if (response && response.data) {
  //       setStudents(response.data)
  //     }
  //   }
  //   loadStudents();
  // }, []);
  
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
            {allPosts && allPosts.map((post) => {
              return(
                <Post {...post} key={post.id} />
              )
            })}
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeedScreen