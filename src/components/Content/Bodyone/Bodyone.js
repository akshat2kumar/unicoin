import React from 'react'
import './Bodyone.css'
import video from './home_banner_video.m4v';
import videoimg from './shape_home_round.png';
export default function Bodyone() {
  return (
    <div className='bodyoone'>
        <div className='videodiv'>
        <video autoPlay loop muted className='videopart'>
          <source src={video} type="video/mp4" />
        </video>
        <img src={videoimg} alt="Canvas Logo" className='videoimg'/>
        <div className='overlay'>
       <h1 className='videocontent'>Safe & Easiest<br/> Way to Trade </h1>
       <button className='downloadapp'>Download App</button>
     </div>
     </div>   
    </div>
  )
}
