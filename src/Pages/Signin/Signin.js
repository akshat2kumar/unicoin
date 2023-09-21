import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './Signin.css';
import logoImage from './view.png';
import { Link } from 'react-router-dom';
export default function Signin() {
 const[phonenumber,setPhonenumber]=useState('')
 const[valid,setValid]=useState( true)
 const[state,setState]=useState(true)

const handleChange=(value)=>{
   
   setPhonenumber(value);
   setValid(validatePhoneNumber(value))
}
const validatePhoneNumber=(phoneNumber)=>{
    const phoneNumberPattern=/^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber)
}

  return (<div className='signindiv'>
    <img src={logoImage} alt="Canvas Logo" className='logo'/>
    <div className='signintable'>
      <div className='emailandnumber'>
        <button className= {state?'buttonblue':'button'} onClick={()=>state? setState(state):setState(!state)} > Email</button>
        <button className={state?'button':'buttonblue'} onClick={()=>state? setState(!state): setState(state)}>Phone Number</button>
       <Link to="/">   <h3 className='close' >X</h3></Link>
      </div>
      {state ? <div className='signinemail'>
                  <div className='signinblank'> </div>
                  <label className='label'>EMAIL</label>
                  <input type='text' className='email' placeholder='Email'></input>
                  <label className='label'>PASSWORD</label>
                  <input type='text' className='password' placeholder='Password'></input>
                  <button className='login'>Log In</button> 
                </div>:
                <div className='signinemail'>
                  <label className='label'> PHONE NUMBER </label>
                  <PhoneInput country={'in'} value={phonenumber} onChange={handleChange} inputProps={{ required:true,style: { width: '100%',height:'40px'}}} className='email'> 
                  </PhoneInput>
                  <label className='label'>PASSWORD</label>
                  <input type='text' className='password' placeholder='Password'></input>
                  <button className='login'>Log In</button> 
                </div>}   

      {!valid && <p>please enter a valid number</p>}
    </div>
    <div className='forgotregisterdiv'>
      <p className='forgotregister'>Forgot password?</p>
      <p className='forgotregister'>Register Now</p>

    </div>
    </div>
  )
}
