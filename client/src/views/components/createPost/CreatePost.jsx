import React from 'react'

const CreatePost = () => {

  
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
            <div className="post-content">
              <div className='publish-btn'>
                <button>Publish</button>              
              </div>
            </div>
          <div className="main-content">
            <p>TITLE</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CreatePost