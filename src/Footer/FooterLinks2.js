import React from 'react'
import { NavLink } from 'react-router-dom'

function FooterLinks2() {
    const array=['Get the IMDb  App','Help','Site Index','IMDbPro','Box Office Mojo','IMDb Developer']
   
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
        {
            array.map(value=>
                (
                    <NavLink className='footerlinks2-styles'>{value}
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className='launch-icon-style' viewBox="0 0 24 24" fill="white" role="presentation">
                        <path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path>
                    </svg>
                    </NavLink>
                ))
        }
    </div>
  )
}

export default FooterLinks2
