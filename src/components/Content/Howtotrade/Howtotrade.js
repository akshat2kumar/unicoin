import React from 'react'
import fade from './round_home_trade.png'
import ball from './04-slide.png'
import icon from './h86hkyex.png'
import './Howtotrade.css'
export default function Howtotrade() {
  return (
    <div className='howtotrade'>
        <img src={fade} alt="Canvas Logo" className='howtotrade-fadeimg'/>
        <img src={icon} alt="Canvas Logo" className='howtotrade-iconimg'/>
       
        <img src={ball} alt="Canvas Logo" className='howtotrade-ball'/>
        <h1 className='howtotrade-mainheading'>How to trade cryptocurrencies?</h1>
        <li className='howtotradenextgeneration'> NEXT GENERATION MONEY
        </li>
        <div className='howtotrade-contentdiv'>
            <p className='howtotrade-contentnumber'>01</p>
            <h1 className='howtotrade-contentheading'>Get registered with us</h1>
            <p className='howtotrade-contentpara'>Register with your unique identification to help us ensure your 
            authenticity and to generate your client access credentials.</p>
            <h className='howtotrade-knowmore'>Know More</h>
            <div className='blank'></div>
            <p className='howtotrade-contentnumber'>02</p>
            <h1 className='howtotrade-contentheading'>Link your bank or payment method</h1>
            <p className='howtotrade-contentpara'>Enable deposit and withdrawal at the time of buying and selling by linking your
             bank account or any of your preferred payment methods.</p>
            <h className='howtotrade-knowmore'>Know More</h>
            <div className='blank'></div>
            <p className='howtotrade-contentnumber'>03</p>
            <h1 className='howtotrade-contentheading'>Download Platform</h1>
            <p className='howtotrade-contentpara'>Download our sophisticated trader and gain access to the real time fluctuations
             of the crypto market from any compatible device.</p>
            <h className='howtotrade-knowmore'>Know More</h>
            <div className='blank'></div>
            <p className='howtotrade-contentnumber'>04</p>
            <h1 className='howtotrade-contentheading'>Buy, Sell, and Trade Cryptocurrencies</h1>
            <p className='howtotrade-contentpara'>Once the registration is done and verified, you are all set to trade the cryptocurrencies in an easy, secured,
             and reliable environment.</p>
            <h className='howtotrade-knowmore'>Know More</h>
            <div className='blank'></div>
            
        </div>
    </div>
  )
}
