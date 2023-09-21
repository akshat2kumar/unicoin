import React from 'react'
import './Unicoindigital.css'
import icon1 from'./icon1.png'
import icon2 from'./icon2.png'
import icon3 from'./icon3.png'
import icon4 from'./icon4.png'
import icon5 from'./icon5.png'
import icon6 from'./icon6.png'

export default function Unicoindigital() {
  return (

    <div className='unicoindigital'>
        <h1 className='unicoindigitalmainheading'>Unicoin digital <br/>capital exchange</h1>
        <div className='unicoindigital-contentdiv'>
            <div className='unicoindigital-content'>
                <img src={icon1} alt="Canvas Logo" className='unicoindigital-iconimg'/>
                <h3 className='unicoindigital-contentheading'>User-Friendly</h3>
                <p className='unicoindigital-contentpara'>Users are provided with real-time price feeds of listed Cryptocurrencies along with the major technical tools,
                 strong security measures and easy interactive layout.</p>
            </div>
            <div className='unicoindigital-content'>
                <img src={icon2} alt="Canvas Logo" className='unicoindigital-iconimg'/>
                <h3 className='unicoindigital-contentheading'>Competitive Cost</h3>
                <p className='unicoindigital-contentpara'>You can trade listed instrument of a various digital asset with low spread and commission which gives our clients an
                 advantage in trade.</p>
            </div>
            <div className='unicoindigital-content'>
                <img src={icon3} alt="Canvas Logo" className='unicoindigital-iconimg'/>
                <h3 className='unicoindigital-contentheading'>Risk Management Tools</h3>
                <p className='unicoindigital-contentpara'>Unicoin Digital Capital Exchange platform possess all kind of risk mitigation tools to
                 improve your profit potential.</p>
            </div>
            <div className='unicoindigital-content'>
                <img src={icon4} alt="Canvas Logo" className='unicoindigital-iconimg'/>
                <h3 className='unicoindigital-contentheading'>Liquidity</h3>
                <p className='unicoindigital-contentpara'>Our Business model includes the provision of a liquidity provider which quotes buy and 
                sell price on a continuous basis to help maintain the liquidity in the market.</p>
            </div>
            <div className='unicoindigital-content'>
                <img src={icon5} alt="Canvas Logo" className='unicoindigital-iconimg'/>
                <h3 className='unicoindigital-contentheading'>Top Class Security</h3>
                <p className='unicoindigital-contentpara'>Unicoin Digital Capital Exchange has invested heavily in the security of the system and
                 technology to safegaurd our clients’ fund.</p>
            </div>
            <div className='unicoindigital-content'>
                <img src={icon6} alt="Canvas Logo" className='unicoindigital-iconimg'/>
                <h3 className='unicoindigital-contentheading'>AML & CFT</h3>
                <p className='unicoindigital-contentpara'>Strictly following the Anti Money laundering (AML) and Combating the Financing of Terrorism
                 (CFT) policies.</p>
            </div>
        </div>
      
    </div>
  )
}
