import React from 'react'
import fade from './round_home_license.png'
import './Licenseregulation.css'
import icon from './oxspz708.png'
export default function Licenseregulation() {
  return (
    <div className='Licenseregulation'>
    <img src={fade} alt="Canvas Logo" className='Licenseregulationfade'/>
    <img src={icon} alt="Canvas Logo" className='Licenseregulationicon'/>
      <div className='Licenseregulation-leftcontent'>
          <h1 className='leftcontent-heading'>License & <br/>regulation</h1>
          <p className='leftcontent-para'>In exercise of the powers conferred by section 92(3) of the Labuan Financial Services and Securities act 2010, the Labuan Financial Services Authority hereby grants a 
          license to carry on money-broking business.</p>
          <button className='leftcontent-aboutus'>About us</button>
      </div>
      <div className='Licenseregulation-rightcontent'>
           <div className='rightcontent-one'>
            <h2 className='rightcontent-oneheading'>Authority License</h2>
            <p className='rightcontent-onepara'>License No. MB/21/0068 & License No. CT/21/0011<br></br>Issued by LFSA, Malaysia</p>
            <div className='Licenseregulationblank'></div>
           </div>
           <div className='rightcontent-two'>
            <h2 className='rightcontent-twoheading'>Service Authority</h2>
            <p className='rightcontent-twopara'>Strictly following the Anti Money laundering (AML) and <br/>Combating the Financing of Terrorism
             (CFT) policies</p>
             <div className='Licenseregulationblank'></div>
           </div>
      </div>
    </div>
  )
}
