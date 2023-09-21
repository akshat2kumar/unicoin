import React from 'react'
import coinvideo from './coin-video.m4v'
import './Grow.css'
export default function Grow () {
  return (
    <div className='grow'>
      <div className='growvideo'>
      <video autoPlay loop muted className='coinvideo'>
          <source src={coinvideo} type="video/mp4" />
        </video>
      </div>
      <div className='growcontentdiv'>
        <div className='growcontent'>
        <h3 className='grow-mainheading'>Grow your profit, track your investments</h3>
        <h3 className='grow-subheading'>What is Cryptocurrency?</h3>
        <p className='grow-para'>Cryptocurrency is a digital or virtual currency created and managed with the help of advanced 
            encryption techniques popularly known as cryptography. Cryptocurrencies 
            use peer to peer mechanism and each cryptocurrency works through distributed ledger technology,
             typically a Blockchain that serves as a public financial transaction database. The basic purpose 
             of cryptocurrency is to function as a medium of exchange for various purposes. In order to securely transact,
              cryptocurrency used cryptography for securing and validating transaction. Encryption technique in cryptocurrency
               also regulate the generation of currency unit and verify the fund transfer and operation independently.
                Cryptocurrency also known as Digital currency made a huge jump into the reality with the creation and 
                launch of bitcoin in the year 2009.</p>
                </div>
      </div>
    </div>
  )
}
