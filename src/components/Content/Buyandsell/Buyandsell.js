import React from 'react'
import './Buyandsell.css'
import icon1 from './ladgqr58.png'
import icon2 from './k567qtz8.png'
import phone from './device-phone-tab.png'
import  qr from  './qr-code.png'
export default function Buyandsell() {
  return (
    <div className='Buyandsell'>
        <div className='Buyandsell-content'>
          <h1 className='Buyandsell-contentheading'>Buy & sell crypto tokens safely</h1>
          <p className='Buyandsell-contentpara'>In Unicoin Digital Capital Exchange, the live trading<br/> account provides access to the world of<br></br>
              Cryptocurrencies trading.</p>
          <div className='Buyandsell-qrdiv'>
             <img src={qr} alt="Canvas Logo" className='qr'/>
            <div className='Buyandsell-qrdivcontent'>
                <div className='logo'>
                     <h1>image</h1>
                </div>
                <p className='scanto'> Scan to</p>
                <p className='downloadtheapp'> Download the App</p>
            </div>
          </div>
          <img src={icon1} alt="Canvas Logo" className='Buyandsell-icon1'/>
        </div>
        <div className='Buyandsell-picdiv'>
        <img src={phone} alt="Canvas Logo" className='Buyandsell-phone'/>
        <img src={icon2} alt="Canvas Logo" className='Buyandsell-icon2'/>
        </div>
    </div>
  )
}
