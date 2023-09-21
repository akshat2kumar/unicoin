import React from 'react'
import styles from './Navbar.module.scss';
import logoImage from './images/header-logo.png';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className={styles.navbar}>
        <div className={styles.unicoin}>
        <Link to="/"> <img src={logoImage} alt="Canvas Logo"/></Link> 
        </div>
        <div  className={styles.navcontent}>
           <h4>Markets</h4>
           <h4>Buy Cryptos</h4>
           <h4>UNIQ Tokens</h4>
           <h4>Referrals</h4>
          <Link to="contactus" className= {styles.customlink}><h4>Contact Us</h4></Link> 
        </div>
        <div className={styles.signinup}>
        <Link to="signin">  <button className={styles.signin}> <span>Sign In</span></button></Link>
        <Link to="signup"><button className={styles.signup}> <span>Sign Up</span></button></Link>
        </div>
        
     
    </div>
  )
}
