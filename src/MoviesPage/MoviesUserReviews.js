import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState,useEffect } from 'react'

function MoviesUserReviews() {
    const [isHover,setisHover]=useState(false)
    const [isClick,setisClick] = useState(false)

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

    const handleMouseClick=() =>
    {
        setisClick(true)
    }

    const getStyles1Click=() =>
    {
        return{
            display:isClick?"none":"block"
        }
    }

    const getStyles2Click=() =>
    {
        return{
            display:isClick?"block":"none"
        }
    }

    // const combinedStyles=() =>
    // {
    //     getStyles1Click()
    //     getStyles2Click
    // }
  return (
      <div className='movies-user-review-section'>

          <NavLink to='' className='top-cast-button'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <div style={{ display: "flex" }}>
                  <div className='heading-start'></div>
                  <div className='top-cast'>User reviews</div>
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" style={getStyles()} class="top-cast-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation">
                      <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path>
                  </svg>
              </div>
          </NavLink>

          <div style={{marginTop:"30px"}}>
            <div className='user-review-content'>
                <div></div>
                <div className='user-review-before' style={getStyles1Click()}>
                    <h2>Lies in between good and better</h2>
                    <p>Between good and better but not great as Hirani sir does.</p>
                    <p>I would rank it 4th in Hirani's filmography.</p>
                    <p>The movie is based on dunki and the cast has their own stories especially SRK'S and Vicky kaushal's story were a cinema in itself the cast was outstanding but SRK and Vicky kaushal were great, SRK as Hardy is loveable , trustable and a great leader.</p>
                    <p>Positives: The stories and their subplots Cast and their performances SRK HIRANI The frames were just like wallpapers I loved the scale and quality of the film.</p>
                    <button className='user-review-more-button' onClick={handleMouseClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--more-horiz ipc-overflowText-overlay__affordance" viewBox="0 0 24 24" fill="currentColor" role="presentation">
                            <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                        </svg>
                    </button>
                </div>
                <div className='user-review-after' style={getStyles2Click()}>
                    <h2>Lies in between good and better</h2>
                    <p>Between good and better but not great as Hirani sir does.</p>
                    <p>I would rank it 4th in Hirani's filmography.</p>
                    <p>The movie is based on dunki and the cast has their own stories especially SRK'S and Vicky kaushal's story were a cinema in itself the cast was outstanding but SRK and Vicky kaushal were great, SRK as Hardy is loveable , trustable and a great leader.</p>
                    <p>Positives: The stories and their subplots Cast and their performances SRK HIRANI The frames were just like wallpapers I loved the scale and quality of the film.</p>
                    <p>Dialogues were a big plus where my heart melted and yes comedy worked but you won't burst out laughing.</p>
                    <p>Negatives: Rushed screenplay took time to set up a story in 1St but then rushed in second half and also in emotional scenes My tears were ready but just then the scene was cut.</p>
                    <p>Movie had great album but was wasted in the movie And background score was not strong enough to support the emotionally loaded movie Last words to say had a pleasant watch.</p>
                </div>
            </div>
          </div>
      </div>
  )
}

export default MoviesUserReviews
