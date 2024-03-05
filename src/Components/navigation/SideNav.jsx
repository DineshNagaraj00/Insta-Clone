import React from 'react'
import './Sidenav.css'
import { Home } from '@mui/icons-material'
import { Search } from '@mui/icons-material'
import { Explore } from '@mui/icons-material'
import { Slideshow } from '@mui/icons-material'
import { Chat } from '@mui/icons-material'
import { FavoriteBorder } from '@mui/icons-material'
import { AddCircleOutlineOutlined } from '@mui/icons-material'
import { Menu } from '@mui/icons-material'


function SideNav() {
  return (
    <div className='sidenav'>
      <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRadwrXLSLMGMcZZ88Zv9UKTkLfV4fOGxoc9w&usqp=CAU" alt="" />
      <div className="sidenav__buttons">
        <button className="sidenav__button">
          <Home/>
          <span>Home</span>
        </button>
        <button className="sidenav__button">
          <Search/>
          <span>Search</span>
        </button>
        <button className="sidenav__button">
          <Explore/>
          <span>Explore</span>
        </button>
        <button className="sidenav__button">
          <Slideshow/>
          <span>Reels</span>
        </button>
        <button className="sidenav__button">
          <Chat/>
          <span>Message</span>
        </button>
        <button className="sidenav__button">
          <FavoriteBorder />
          <span>Notification</span>
        </button>
        <button className="sidenav__button">
          <AddCircleOutlineOutlined />
          <span>Create</span>
        </button>
      </div>
      <div className="sidenav__more">
        <button className='sidenav__button'>
          <Menu/>
          <span>More</span>
        </button>
      </div>
    </div>
  )
}

export default SideNav
