import React from 'react'
import { NavLink } from 'react-router-dom'

function HelpConditionsPrivacy() {
  
  return (
    <div style={{marginTop:"20px"}}>
      <div className='help-section'></div>
      <div className='help-conditions-privacy' style={{marginBottom:"15px"}}>
        <NavLink className='help-link' to=''>Help</NavLink>
        <NavLink className='conditions-link' to=''>Conditions of Use</NavLink>
        <NavLink className='privacy-link' to=''>Privacy Notice</NavLink>
      </div>
      <div className='year-company'>
        <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  )
}

export default HelpConditionsPrivacy
