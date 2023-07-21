import React, { useEffect, useState } from 'react'

const Feed = () => {

  const [feeds, setFeeds] = useState(null);

  useEffect(() =>{
    const fetchFeeds = async() =>{
      const response = await fetch('/api/feeds')
      const json = await response.json()

      if(response.ok){
        setFeeds(json)
      }
    }

    fetchFeeds()
  }, [])


  return (
    <div className="twits">
      <div className="feeds">
        {feeds && feeds.map((feed) =>(
          <p key={feed.id}>{feed.title}</p>
        ))}
      </div>
    </div>
  )
}

export default Feed