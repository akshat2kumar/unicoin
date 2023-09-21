import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import './Signup.css';
import logoImage from './view.png';
// import { Link } from 'react-router-dom';
export default function Signup() {
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])
  
    const changeHandler = value => {
      setValue(value)
    }

  return (<div className='signupdiv'>
    <img src={logoImage} alt="Canvas Logo" className='logo'/>
    <div className='signuptable'>   
       {/* <Link to="/">   <h3 className='close' >X</h3></Link> */}
       <div className='signup'>
                  <div className='fullname'>
                    <div className='namediv'>
                         <label className='signuplabel'>EMAIL</label>
                        <input type='text' className='name' placeholder='First Name'></input>           
                    </div>
                    <div className='namediv'>
                        <label className='signuplabel'>EMAIL</label>
                        <input type='text' className='name' placeholder='Second Name'></input>  
                    </div>
                  </div>
                   <Select  options={options} value={value} onChange={changeHandler} />
                  <label className='signuplabel'>EMAIL</label>
                  <input type='text' className='signupemail' placeholder='Email'></input>
                  <label className='signuplabel'>PASSWORD</label>
                  <input type='text' className='signuppassword' placeholder='Password'></input>
                  <label className='signuplabel'> REFERRAL ID (OPTIONAL)</label>
                  <input type='text' className='signuppassword' placeholder='Password'></input>
                  <div className='checkboxdiv'>
                    <input type='checkbox' className='checkboxicon'></input>
                    <p className='termsandcond'>By creating an account, I acknowledge that I have read, understood and agreed, to Unicoindcx's Terms of Service, Risk Disclosure Document, 
                    Privacy Policy and all of its contents.</p>
                  </div>
                  
                  <button className='signuplogin'>Log In</button> 
                </div>  

    </div>

    </div>
  )
}
