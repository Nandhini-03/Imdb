import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import HelpConditionsPrivacy from './HelpConditionsPrivacy'

function ForgotPassword() {
  const [data,setData] = useState()

  const handleInput = (e) =>
  {
    setData(e.target.value)
  }

  console.log(data)
  return (
    <div className='forgot-password-section'>

      <div className='signin-imdb-logo'>
        <NavLink to='/'>
            <img src='https://m.media-amazon.com/images/G/01/imdb/authportal/images/www_imdb_logo._CB667618033_.png' />
        </NavLink>
      </div>

      <div className='password-assistance-section'>

        <div className='password-assistance'>
          <h2 className='password-assistance-heading'>Password assistance</h2>
          <p style={{fontSize:"13px",marginBottom:"10px"}}>Enter the email address or mobile phone number associated with your IMDb account.</p>
          <div>
            <label style={{fontSize:"12px",fontWeight:"800",marginBottom:"20px"}}>Email or mobile phone number</label>
            <input onChange={e=>handleInput(e)} className='mail-number-input'/>
          </div>
          <button className='password-assistance-button'>
            <div>Continue</div>
          </button>
        </div>

        <div className='email-number-changed-section'>
          <p style={{fontSize:"16px"}}>Has your email or mobile number changed?</p>
          <div style={{fontSize:"14px",marginTop:"10px",marginBottom:"50px"}}>
            Please visit our{' '}<NavLink className='registration-help-page'>Registration Help page</NavLink> for account recovery assistance 
          </div>
        </div>  


        <HelpConditionsPrivacy />
      </div>
    </div>
  )
}

export default ForgotPassword
