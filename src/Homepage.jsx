import React from 'react'
import './Homepage.css'
import SideNav from './Components/navigation/SideNav'
import Timeline from './Components/timeline/Timeline'

function Homepage() {
  return (
    <div className='homepage'>
        <div className="homepage__nav">
            <SideNav/>
        </div>
        <div className="homepage__timeline">
            <Timeline/>
        </div>
      
    </div>
  )
}

export default Homepage
