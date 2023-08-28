import React, { useState } from 'react'
import FormButton from '../reusable/FormButton.jsx'
import { Icon } from '@iconify/react';
import InputFields from '../reusable/InputFields.jsx';
import { Axios } from '../auth/signUp/index.jsx';
import {useNavigate} from 'react-router-dom'

const CreatePost = () => {
  const initialValue = {
    title: "",
    content: "",
  }
  const [postData, setPostData] = useState(initialValue)

  const handleChange = (e) => {
    e.preventDefault();
    setPostData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const navigate = useNavigate()

  const handleClick = async(e) =>{
    e.preventDefault();
    const data = {
      title: postData.title,
      content: postData.content,
    }
    
    try {
      const response = await Axios.post("http://localhost:3000/api/1.0/chatter/feeds", data)

      if (response.status === 200) {
        console.log(response.data);
      }
      navigate('/feedScreen');

    } catch (error) {
      console.log(error.response.data);
    }
  }

  
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
            <div className="posts-inner-container">
        <div className="posts-button">
          <FormButton label="Publish" onClick={handleClick}/>
        </div>
        <div className="content-image-container">
          <div className="media-container">
            <div className="hidden-media-icons">
              <Icon icon="simple-line-icons:plus" color="gray" width="30" height="30" />
            </div>

            {/* <div className="post-image">
              <img src="" alt="" />
            </div>
            <div className="post-video">
              <video src=""></video>
            </div> */}

            <div className="posts-content">
              <div className="posts-content-title">
                <InputFields 
                type="title" 
                name="title" 
                id="title" 
                required= 'required' 
                placeholder="Title"
                autoComplete='on'
                value={postData.title}
                onChange={handleChange}
                />
              </div>
              <div className="main-content">
                <textarea 
                value={postData.content} 
                name="content" 
                id="content" 
                cols="70" 
                rows="20" 
                required='required' 
                placeholder='Write a post..........'
                onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </section>
    </div>
  )
}

export default CreatePost