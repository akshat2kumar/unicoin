import React from 'react'
import './Platformsecurity.css'
import icon from './q3jwyi6i.png'
import fade from './round_home_security.png'
import video from './security-video.mp4'
export default function Platformsecurity() {
  return (
    <div className='platformsecurity'>
        <div className='platformsecurity-videodiv'>
        <img src={icon} alt="Canvas Logo" className='platformsecurity-icon'/>
        <video autoPlay loop muted className='platformsecurity-video'>
          <source src={video} type="video/mp4" />
        </video>
        <img src={fade} alt="Canvas Logo" className='platformsecurity-fade'/>
        </div>
        <div className='platformsecurity-content'>
        <h1 className='platformsecurity-mainheading'>Platform’s security <br/>measures </h1>
            <div className='platformsecurity-boxdiv'>
                <div className='platformsecurity-box'>
                    <h2 className='platformsecurity-boxheading'>Industry Best</h2>
                    <p className='platformsecurity-boxpara'>We follow industry best practices
                            in order to secure client’s digital asset.</p>
                </div>
                <div className='platformsecurity-box'>
                    <h2 className='platformsecurity-boxheading'>Secure Assets</h2>
                    <p className='platformsecurity-boxpara'>Stored in separate asset specific
                          wallet making our customers crypto assets very secure.</p>
                </div>
                <div className='platformsecurity-box'>
                    <h2 className='platformsecurity-boxheading'>Secure Authentication</h2>
                    <p className='platformsecurity-boxpara'>2-factor authentication for clien wallet access.</p>
                </div>
                <div className='platformsecurity-box'>
                    <h2 className='platformsecurity-boxheading'>Double Check Transaction</h2>
                    <p className='platformsecurity-boxpara'>Every transaction involving the transfer of funds are double
                    confirmed by trusted human resources in UDCX.</p>
              </div>

            </div>

        </div>
        <div></div>
      
    </div>
  )
}
