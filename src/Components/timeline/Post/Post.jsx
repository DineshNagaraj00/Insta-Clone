import React from 'react'
import './Post.css'
import Avatar from '@mui/material/Avatar';
import { BookmarkBorder, ChatBubbleOutline, FavoriteBorder, MoreHoriz, Telegram } from '@mui/icons-material';


function Post({user, postImage, likes, timespamp}) {
  return (
    <div className='post'>
        <div className="post__header">

            <div className="post__headerAuthor">
            <Avatar src='https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=600'>{user.charAt(0).toUpperCase()}</Avatar>
            {user}·<span>{timespamp}</span>
            </div>
            <MoreHoriz/>
        </div>
        <div className="post__image">
<img src={postImage} alt="" />        </div>

        <div className="post__footer">
                <div className="post__footerIcons">
                    <div className="post__iconsMain">
                        <FavoriteBorder className='postIcon'/>
                        <ChatBubbleOutline className='postIcon'/>
                        <Telegram className='postIcon'/>
                    </div>
                    <div className="post__iconSave">
                        <BookmarkBorder/>
                    </div>
                </div>
                
                Likedy by {likes} people
        </div>
    </div>
  )
}

export default Post