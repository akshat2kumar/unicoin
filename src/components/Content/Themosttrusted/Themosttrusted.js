import React from 'react'
import maskgrpimg from './mask-group-127.jpg'
import'./Themosttrusted.css'
export default function Themosttrusted() {
  return (
    <div className='Themosttrusted'>
      <div className='Themosttrusted-contentdiv'>
        <div className='Themosttrusted-content'>
            <h3 className='Themosttrusted-heading'>The most trusted way to build value</h3>
            <p className='Themosttrusted-para'> Unicoin Digital Capital Exchange is an exchange for Cryptocurrencies jointly promoted by Pride 
            Holding and Partners.</p>
            <p className='aboutus'>About Us</p>
        </div>
        <div className='Themosttrusted-employee'>
             <div className='Themosttrusted-box'>
                 <h2 className='Themosttrusted-number'>1992</h2>
                 <p className='Themosttrusted-text'>Founded</p>
             </div>
             <div class="vertical-line"></div>
             <div className='Themosttrusted-box'>
                 <h2 className='Themosttrusted-number'>10,000+</h2>
                 <p className='Themosttrusted-text'>Employees</p>
             </div>
             <div class="vertical-line"></div>
             <div className='Themosttrusted-box'>
                 <h2 className='Themosttrusted-number'>3000+</h2>
                 <p className='Themosttrusted-text'>Representatives</p>
             </div>
        </div>
      </div>
      <div className='Themosttrusted-picdiv'>
        <img src={maskgrpimg} alt="Canvas Logo" className='Themosttrusted-img'/>
      </div>
    </div>
  )
}
