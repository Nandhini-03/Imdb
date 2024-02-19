import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function RecentlyViewed() {
    const [isHovericon,setisHovericon] = useState(false)

    const handleMouseEnterWatchlist =() =>
    {
      setisHovericon(true)
    }
  
    const handleMouseLeaveWatchlist=() =>
    {
      setisHovericon(false)
    }
  
    const getStyles=() =>
    {
      return{
        opcity:isHovericon?"0.5" : "0.2"
      }
    }


    useEffect(()=>
    {
        console.log("recently")
        const fetchData = async() =>
        {
            console.log("recently viewed")
            try{
                const response=await axios.get('https://imdb-backend-r3r6.onrender.com/title/recentlyViewed?userId=sanjay13')
                .then(response =>
                    {
                        console.log(response.data)
                    })
                .catch(error =>
                    {
                        console.log(error)
                    })
            }
            catch(error)
            {
                console.log(error)
            }
        }
        fetchData()
    },[])

  return (
      <div className='recently-viewed-section'>
          <h1 className='recently-viewed-heading-main'>Recently viewed</h1>
          <div>
              <div className='card-image-section'>

                  <div className='add-watchlist-icon'
                      onMouseEnter={handleMouseEnterWatchlist}
                      onMouseLeave={handleMouseLeaveWatchlist}
                      style={getStyles()}>
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

                  <div style={{ width: "185px", height: "274px" }}>
                      <img className='card-image' src='https://m.media-amazon.com/images/M/MV5BOWRiZjYwZjUtYmIwMy00ZDUzLTk2NjktZmJkZjRkNjU0MDE3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL75_UX280_CR0,3,280,414_.jpg' />
                  </div>
              </div>

              <NavLink to='/' className='movie-name-section'>
                    <div className='movie-details'>Reacher</div>
              </NavLink>
          </div>
      </div>
  )
}

export default RecentlyViewed
