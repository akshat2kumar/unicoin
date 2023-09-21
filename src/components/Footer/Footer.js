import React from 'react'
import Footerimg from'../Footer/images/footer_corner.png'
import './Footer.css'
export default function Footer() {
  return (
    <div className='Footer'>
        <div className='Footerimgdiv'>
        <img src={Footerimg} alt="Canvas Logo" className='Footerimg'/>
        </div>
       <div className='Footerone'>
        <h1 className='Footeroneheading'>Receive the latest news about our journey</h1>
        <div className='Footerone-content'>
          <h3 className='Footerone-contentheading'>Newsletter Subscription</h3>
          <div className='Footerone-contentinput'>
               <input className='Footerone-input' type='text' placeholder='Your email address'></input>
               <button className='Footerone-button'>Subscribe</button>
          </div>
        </div>
       </div> 
       <div className='Footertwo'>
        <div className='Footertwo-part'>
            <h3 className='Footertwo-contentsone'>Discover</h3>
            <h3 className='Footertwo-contents'>About Us</h3>
            <h3 className='Footertwo-contents'>Membership</h3>
            <h3 className='Footertwo-contents'>Legal</h3>
            <h3 className='Footertwo-contents'>Markets</h3>
            <h3 className='Footertwo-contents'>Educare</h3>
            <h3 className='Footertwo-contents'>Referrals</h3>
        </div>
        <div className='Footertwo-part'>
            <h3 className='Footertwo-contentsone'>Support</h3>
            <h3 className='Footertwo-contents'>Contact Us</h3>
            <h3 className='Footertwo-contents'>Newsletter</h3>
            <h3 className='Footertwo-contents'>Glossary</h3>
            <h3 className='Footertwo-contents'>Media</h3>
            <h3 className='Footertwo-contents'>Careers</h3>
            <h3 className='Footertwo-contents'>FAQ</h3>
        </div>
        <div className='Footertwo-part'>
            <h3 className='Footertwo-contentsone'>Learn</h3>
            <h3 className='Footertwo-contents'>Buy Bitcoin</h3>
            <h3 className='Footertwo-contents'>Buy Ethereum</h3>
            <h3 className='Footertwo-contents'>Buy Bitcoin Cash</h3>
            <h3 className='Footertwo-contents'>Buy Litecoin</h3>
            <h3 className='Footertwo-contents'>Buy UNIQ Token</h3>
            <h3 className='Footertwo-contents'>Restricted Jurisdictions</h3>
        </div>
        <div className='Footertwo-part'>
            <h3 className='Footertwo-contentsone'>Address</h3>
            <h3 className='Footertwo-contents'>Malaysia</h3>
            <h3 className='Footertwo-contentslast'>Unicoin DCX Limited</h3>
            <h3 className='Footertwo-contentslast'>Unit No. 3A-16, Level 3A</h3>
            <h3 className='Footertwo-contentslast'>Labuan Times Square</h3>
            <h3 className='Footertwo-contentslast'>Jalan Merdeka, 87000 Labuan F.T</h3>
            <h3 className='Footertwo-getdirection'>Get Direction</h3>
        </div>
       </div>
       <div className='Footerfour'>
           <p className='Footerfour-para'>High Risk Warning: Complex financial products such as Contracts for Difference (‘CFDs’), Virtual Assets etc. that are traded on margin or otherwise, carry a high degree of risk and may expose the investor to substantial losses as well as gains. Trading in complex financial products carries a high degree of risk, subject to rapid and unexpected price movements. It is possible to lose all your capital. These products may not be suitable for everyone and you should ensure that you understand the risks involved. You should carefully consider whether this activity is appropriate for you needs, financial resources, and personal circumstances. You should consider whether you understand how the products offered work and speculate only with funds that you can afford to lose. You are strongly advised to obtain independent financial,
             legal, and tax advice before proceeding.</p>
             <p className='Footerfour-para'>For more information, please refer to Unicoin DCX’s Risk Disclosure Document.</p>
             <p className='Footerfour-para'>Usage of Services: Nothing in this website should be read or construed as constituting advice on the part of Unicoin DCX or any of its affiliates, directors, officers, or employees. The contents are for information and educational purposes only and Unicoin DCX assume no liability for errors, inaccuracies, or omissions; do not warrant the accuracy, or completeness of information, text, graphics, links, or other items delivered or received via this domain. Any indication of past performance or simulated past performance included in advertisements published by Unicoin DCX is not a reliable indicator of future results. The customer carries the sole responsibility 
             for all the trades or investments that are carried out at Unicoin DCX.</p>
             <p className='Footerfour-part'>As a pre-requisite of visitation or use of this domain, you agree to indemnify and hold Unicoin DCX and its employees and affiliates harmless from and against any and all losses, damages, liabilities, costs, charges, and expenses arising out of any use or reliance
              upon information obtained through this domain.</p>
             <p className='Footerfour-para'>By using the service, you acknowledge that you are aware of all the risks associated with the service and have the financial capability to finance your participation and that your use of this site, the service and content, is at your own discretion and risk and that you will be solely responsible
              for any resulting consequences.</p>
             <p className='Footerfour-part'>Jurisdictional Restrictions: We do not offer our services to residents of certain jurisdictions such as Democratic People's Republic of Korea (DPRK), Islamic Republic of Iran, Afghanistan and some other regions. For more information,
              please refer to our support desk.</p>
       </div>
       <div className='Footerfive'>
         <p className='Footerfive-one'> © Copyrights 2023 UNICOIN DCX</p>
         <div className='Footerfive-two'>
         <p className='Footerfive-twotext'>Privacy Policy</p>
         <div className='Footerfive-twoblank'></div>
         <p className='Footerfive-twotext'>Risk Disclosure  </p>
         <div className='Footerfive-twoblank'></div>
         <p className='Footerfive-twotext'>Cookie Policy</p>
         </div>
       </div>
    </div>
  )
}
