import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'


export default function Signup() {

    const[phonenumber,setPhonenumber]=useState('')
    const[valid,setValid]=useState( true)

   
   const handleChange=(value)=>{
      
      setPhonenumber(value);
      setValid(validatePhoneNumber(value))
   }
   const validatePhoneNumber=(phoneNumber)=>{
       const phoneNumberPattern=/^\d{10}$/;
       return phoneNumberPattern.test(phoneNumber)
   }
   
  return (
    <div className='contactpage'>
        <Navbar></Navbar>
    <div className='Contactusdiv'>
       <div className='Contactus'>
        <div className='Contactus-content'>
            <p>CONTACT US</p>
            <h1>Keep in touch with us</h1>
            <h3>info@unicoindcx.com</h3>
            <div className='address'>
                <h3 className='address-city'>Malaysia</h3>
                <p>Unicoin DCX Limited <br></br>Unit No. 3A-16, Level 3A <br/>Labuan Times Square <br/>Jalan Merdeka, 87000 Labuan F.T</p>
            </div>
        </div>
        <div className='Contactus-form'>
            <label className='Contactuslabel'>Full Name*</label>
            <input type='text' className='Contactusinput'></input>
            <label className='Contactuslabel'> Mobile Number* </label>
            <PhoneInput country={'in'} value={phonenumber} onChange={handleChange} inputProps={{ required:true,style: { width: '100%',height:'40px'}}} className='signupinput'> 
            </PhoneInput>
            <label className='Contactuslabel'>Email Address*</label>
            <input type='text' className='Contactusinput' placeholder='Email'></input>
            <label className='signuplabel'>Area of Interest*</label>
            <input type='text' className='signupinput' placeholder='Password'></input>
            <label className='signuplabel'>Message*</label>
            <input type='text' className='signupinput' placeholder='Password'></input>
            <div className='code'>
            <input type='text' className='codeinput' placeholder='Password'></input> 
            <h2 className='codevalue'>789466</h2>
            </div>
            <button className='signuplogin'>Log In</button> 
            {!valid && <p>please enter a valid number</p>}
        </div>
       </div>
    </div>
    </div>
  )
}
