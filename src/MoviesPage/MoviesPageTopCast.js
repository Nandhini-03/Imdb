import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'

function MoviesPageTopCast() {
    const [isHover,setisHover]=useState(false)
    const [array,setArray] = useState([])

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

    useEffect(() =>
  {
    const fetchData=async() =>
    {
      try{
        const response=await axios.get('https://imdb-backend-r3r6.onrender.com/cast?id=155')
        .then(response =>
            {
                setArray(response.data)
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
    
      <div className='top-cast-section'>

          <NavLink to='' className='top-cast-button'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <div style={{ display: "flex" }}>
                  <div className='heading-start'></div>
                  <div className='top-cast'>Top cast</div>
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" style={getStyles()} class="top-cast-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation">
                      <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path>
                  </svg>
              </div>
          </NavLink>

          <div style={{marginTop:"20px",display:"grid",gridTemplateColumns:"1fr 1fr"}}>

              {
                  array.map(item =>

                      <div style={{ display: "flex", marginRight: "10px", marginBottom: "25px" }}>
                          <div className='top-cast-images-section'>
                              <NavLink className='top-cast-image-navigation'>
                                  <img className='top-cast-image' src={item.profile_path} />
                              </NavLink>
                          </div>

                          <div className='top-cast-names'>
                              <NavLink className='top-cast-actor-name'>{item.original_name}</NavLink>
                              <NavLink className='top-cast-name-movie'>
                                  <span>{item.character}</span>
                              </NavLink>
                          </div>
                      </div>

                  )
              }
          </div>

          <div style={{marginRight:"20px"}}>
            <div className='movie-members-details' style={{display:"flex"}}>
                <p className='movie-director-heading'>Director</p>
                <NavLink className='movie-director-name'>Rajkumar Hirani</NavLink>
            </div>
            <div className='movie-members-details' style={{display:"flex",justifyContent:"space-between"}}>
                <div style={{display:"flex"}}>
                    <NavLink className='writer-crew-production'>Writer</NavLink>
                    <NavLink className='movie-director-name'>Abhijat Joshi</NavLink>
                    <p>.</p>
                    <NavLink className='movie-director-name'>Abhijat Joshi</NavLink>
                    <p>.</p>
                    <NavLink className='movie-director-name'>Abhijat Joshi</NavLink>
                </div>
                <NavLink>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon-right" viewBox="0 0 24 24" fill="currentColor" role="presentation">
                        <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"></path>
                    </svg>
                </NavLink>
            </div>
            <div className='movie-members-details' style={{display:"flex",justifyContent:"space-between"}}>
                <NavLink className='writer-crew-production'>All cast & crew</NavLink>
                <NavLink className='movie-director-name' style={{marginRight:"2px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon-right" viewBox="0 0 24 24" fill="currentColor" role="presentation">
                        <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"></path>
                    </svg>
                </NavLink>
            </div>
            <div className='movie-members-details' style={{display:"flex",justifyContent:"space-between",borderBottom: "1px solid rgba(0,0,0,.12)"}}>
                <NavLink className='writer-crew-production'>Production,box office & more at IMDbPro</NavLink>
                <NavLink className='movie-director-name' style={{marginRight:"2px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon-right" viewBox="0 0 24 24" fill="currentColor" role="presentation">
                    <path d="M16 16.667H8A.669.669 0 0 1 7.333 16V8c0-.367.3-.667.667-.667h3.333c.367 0 .667-.3.667-.666C12 6.3 11.7 6 11.333 6h-4C6.593 6 6 6.6 6 7.333v9.334C6 17.4 6.6 18 7.333 18h9.334C17.4 18 18 17.4 18 16.667v-4c0-.367-.3-.667-.667-.667-.366 0-.666.3-.666.667V16c0 .367-.3.667-.667.667zm-2.667-10c0 .366.3.666.667.666h1.727L9.64 13.42a.664.664 0 1 0 .94.94l6.087-6.087V10c0 .367.3.667.666.667.367 0 .667-.3.667-.667V6h-4c-.367 0-.667.3-.667.667z"></path>
                </svg>
                </NavLink>
            </div>
          </div>

      </div>
  )
}

export default MoviesPageTopCast
