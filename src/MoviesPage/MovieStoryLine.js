import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function MovieStoryLine() {
    const [isHover,setisHover]=useState(false)

    const handleMouseEnter=() =>
    {
        setisHover(true)
    }
    const handleMouseLeave=() =>
    {
        setisHover(false)
    }

    const getStyles=() =>
    {
        return{
            fill: isHover ? "#f5c518" : "black"
        }
    }
  return (
      <div className='movie-storyline-section'>

          <NavLink to='' className='top-cast-button'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <div style={{ display: "flex" }}>
                  <div className='heading-start'></div>
                  <div className='top-cast'>Storyline</div>
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" style={getStyles()} class="top-cast-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation">
                      <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path>
                  </svg>
              </div>
          </NavLink>

          <div style={{marginTop:"20px",letterSpacing:"0.03125em",color:"rgba(0,0,0,.87)",lineHeight:"1.5rem",fontSize:"1rem"}}>
            Four friends from a village in Punjab share a common dream: to go to England. Their problem is that they have neither the visa nor the ticket. A soldier promises to take them to the land of their dreams. Dunki is a hilarious and heartwarming saga of a perilous journey, borders, friendships, nostalgia for home, and love that towers above it all.
          </div>

          <div style={{marginTop:"20px"}}>
            <div style={{display:"flex",borderBottom: "1px solid rgba(0,0,0,.12)",padding:"15px 0"}}>
                <NavLink className='storyline-links'>Plot Summary</NavLink>
                <p style={{display:"flex",justifyContent:"center"}}>.</p>
                <NavLink className='storyline-links' style={{marginLeft:"7px"}}>Add synopsis</NavLink>
            </div>

            <div style={{display:"flex",borderBottom: "1px solid rgba(0,0,0,.12)",padding:"15px 0"}}>
                <span style={{fontWeight:"600",marginRight:"15px"}}>Genres</span>
                <NavLink className='storyline-links'>Comedy</NavLink>
                <p style={{display:"flex",}}>.</p>
                <NavLink className='storyline-links' style={{marginLeft:"5px"}}>Drama</NavLink>
            </div>

            <div style={{display:"flex",borderBottom: "1px solid rgba(0,0,0,.12)",padding:"15px 0",justifyContent:"space-between"}}>
                <div>
                    <NavLink className='storyline-certificate-guide'>Certificate</NavLink>
                    <span>15</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon-right" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"></path>
                </svg>
            </div>

            <div style={{padding:"15px 0",borderBottom: "1px solid rgba(0,0,0,.12)"}}>
                <NavLink className='storyline-certificate-guide'>Parents guide</NavLink>
            </div>
          </div>
      </div>
  )
}

export default MovieStoryLine
