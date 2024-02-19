import React from 'react'
import { NavLink } from 'react-router-dom'
import FooterLinks from './FooterLinks'

function Footer() {
  return (
    <div className='footer-styles'>

      <div style={{maxWidth: "1280px",padding:"20px"}}> 
        <NavLink to='signin' className='footer-signin-box'>
            <span className='footer-sign-in'>Sign in for  more access</span>
        </NavLink> 
      </div>
      <FooterLinks />
      
    </div>
  )
}

export default Footer
