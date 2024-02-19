import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function MoviesPageVideos() {
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
      <div className='movies-videos-section'>
          <div>
              <NavLink to='' className='movies-videos-button'
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                  <div style={{ display: "flex" }}>
                      <div className='heading-start'></div>
                      <div className='movies-videos'>Videos</div>
                      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" style={getStyles()} class="movie-videos-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation">
                          <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path>
                      </svg>
                  </div>
              </NavLink>
          </div>

          <div style={{marginTop:"20px",display:"grid"}}>
            <div className='videos-section'>
                <NavLink style={{display:"inlineFlex"}}>
                    <div style={{position:"relative",width:"100%",display:"inline-flex"}}>
                        <img src='https://m.media-amazon.com/images/M/MV5BMzgwYWNlMDItZDdjOS00NmI3LWJlNGUtNjRkYzYyYjU4OWE5XkEyXkFqcGdeQWRvb2xpbmhk._V1_QL75_UY563_CR0,0,1000,563_.jpg' className='videos-thumnail-images'/>
                    </div>
                    <div></div>
                </NavLink>
            </div>
            
          </div>
      </div>
  )
}

export default MoviesPageVideos
