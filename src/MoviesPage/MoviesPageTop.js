import React from 'react'
import { NavLink } from 'react-router-dom'

function MoviesPageTop() {
  return (
    <div style={{position:"relative"}}>

      {/* <div className='movies-photos-videos' style={{backgroundImage:"url('https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SL200_QL1.jpg)"}}> */}
      <div></div>
      <div></div>
      <div style={{display:"flex",alignItems:"center",margin:"0 20px 10px 20px"}}>
        {/* <p style={{color:"white"}}>Movie pages</p> */}
        <div className='movie-poster-section'>

          <div className='add-watchlist-icon'>
            <svg className="ipc-watchlist" width="24px" height="34px" viewBox="0 0 24 34" xmlns="http://www.w3.org/2000/svg" role="presentation">
              <polygon className="watchlist-ribbon" fill="#000000" points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon>
              <polygon className="watchlist-hover" points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon>
              <polygon className="watchlist-shadow" points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"></polygon>
            </svg>
            <div className='watchlist-plus-icon'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="plus-icon" viewBox="0 0 24 24" fill="white" role="presentation">
                <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
              </svg>
            </div>
          </div>

          
            <NavLink className='movie-poster'>
              <img src='https://m.media-amazon.com/images/M/MV5BMzQ0NDRhNmItYzllYS00NDdlLTk0YTctZDQ5YmFkYjdkNDcyXkEyXkFqcGdeQXVyNTYwMzA0MTM@._V1_QL75_UY562_CR24,0,380,562_.jpg' className='movie-poster-image'/>
            </NavLink>
          
          
        </div>

        <div>
          <div style={{height:"278px",width:"900px"}}>
            <iframe style={{width:"100%",height:"100%"}}  src='https://imdb-video.media-imdb.com/vi3202205465/1434659607842-pgv4ql-1696530497855.mp4?Expires=1703853877&Signature=kMRFit9mi6uzgyJpIM8Eue1EM37k611Ep4FeDkzn1w5xH8pjJUE2kiPkVDItdOXo0ZVnuxi~4Nw4vHRy7WyEXh~6PHDYtqa~PeAiO9-qwgFcNAg1W4OqDW2q6kCGqXbPMZLIQgMPBx7uhxxOac9P1nNoRA7~WI6OeX-hASjkETNRj56nOnmFhQKjkFUPfmpboXk0HVd8w3gj-GImifKcf~WMxQl6TPAETWBEs48e4yFrcuu3HhmXabf131sHxzZUuKDdE0rXgwJknpzniz9T9pJq~gr0ryLjX2FTbIDZSWe2Mx3ILBT6GIUgA2l5ze89Y5aLhqLzshwBqsOUegSKdQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA'/>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>

    </div>
  )
}

export default MoviesPageTop
