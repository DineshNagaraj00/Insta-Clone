import React from 'react'
import './Sugestion.css'
import {Avatar} from '@mui/material'

function Suggestion() {
  return (
    <div className='suggesstion'>
      <div className="suggesstion__title">
        Suggesstion for you
      </div>
      <div className="suggesstion__usernames">

            <div className="suggesstion__username">
              <div className="username__left">
                <span className='avatar'>
                  <Avatar src='https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></Avatar>
                </span>
                <div className="username__info">
                    <span className='username'>redian_</span>
                    <span className='relation'>New to Instagram</span>
                </div>

              </div>
              <button className='follow'>Follow</button>
            </div>

            <div className="suggesstion__username">
              <div className="username__left">
                <span className='avatar'>
                  <Avatar src='https://images.pexels.com/photos/2065203/pexels-photo-2065203.jpeg?auto=compress&cs=tinysrgb&w=600'></Avatar>
                </span>
                <div className="username__info">
                    <span className='username'>redian_</span>
                    <span className='relation'>New to Instagram</span>
                </div>

              </div>
              <button className='follow'>Follow</button>
            </div>

            <div className="suggesstion__username">
              <div className="username__left">
                <span className='avatar'>
                  <Avatar src='https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=600'></Avatar>
                </span>
                <div className="username__info">
                    <span className='username'>redian_</span>
                    <span className='relation'>New to Instagram</span>
                </div>

              </div>
              <button className='follow'>Follow</button>
            </div>
            <div className="suggesstion__username">
              <div className="username__left">
                <span className='avatar'>
                  <Avatar src='https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&w=600'></Avatar>
                </span>
                <div className="username__info">
                    <span className='username'>redian_</span>
                    <span className='relation'>New to Instagram</span>
                </div>

              </div>
              <button className='follow'>Follow</button>
            </div>
            <div className="suggesstion__username">
              <div className="username__left">
                <span className='avatar'>
                  <Avatar src='https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=600'></Avatar>
                </span>
                <div className="username__info">
                    <span className='username'>redian_</span>
                    <span className='relation'>New to Instagram</span>
                </div>

              </div>
              <button className='follow'>Follow</button>
            </div>
      </div>
      
      
    </div>
  )
}

export default Suggestion
