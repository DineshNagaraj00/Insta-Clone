import React, { useState } from 'react'
import Suggestion from './Suggestion'
import './Timeline.css'
import Post from './Post/Post'


function Timeline() {
  const [posts,setPosts]=useState([
    {
      user:"redian",
      postImage:"https://images.pexels.com/photos/6932045/pexels-photo-6932045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      likes:"12,000",
      timespamp:"2h",
    },
    {
      user:"johndoe",
      postImage:
        "https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      likes:"1,102",
      timespamp:"30m",
    },
    {
      user:"jenny",
      postImage:
       "https://images.pexels.com/photos/315191/pexels-photo-315191.jpeg",
      likes:"1,50,235",
      timespamp:"19h",
    },
    {
      user:"Rose",
      postImage:
        "https://images.pexels.com/photos/12369253/pexels-photo-12369253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      likes:"22,999",
      timespamp:"18h",
    },
    
  ]);

  return (
    <div className='timeline'>
        <div className="timeline__left">
            <div className="timeline__post">
              {posts.map(post => (
                <Post user={post.user} postImage={post.postImage} likes={post.likes} timespamp={post.timespamp}/>
              ))}

            </div>
        </div>

        <div className="timeline__right">
           <Suggestion/>
        </div>
    </div>
  )
}

export default Timeline