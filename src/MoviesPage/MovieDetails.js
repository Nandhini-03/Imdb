import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function MovieDetails() {
    const [isHover, setisHover] = useState(false)

    const handleMouseEnter = () => {
        setisHover(true)
    }
    const handleMouseLeave = () => {
        setisHover(false)
    }

    const getStyles = () => {
        return {
            fill: isHover ? "#f5c518" : "black"
        }
    }
    return (
        <div className='movie-details-section'>

            <NavLink to='' className='movie-top-picks-button'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div style={{ display: "flex" }}>
                    <div className='heading-start'></div>
                    <div className='movie-top-picks'>Details</div>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" style={getStyles()} class="top-picks-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation">
                        <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path>
                    </svg>
                </div>
            </NavLink>

            <div>
                <div style={{ borderTop: "1px solid #e7e7e7", padding: "15px 0 10px 0", display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <NavLink className='movie-details-left'>Release date</NavLink>
                        <NavLink className='movie-details-right'>December 21,2023(United Kingdom)</NavLink>
                    </div>
                    <NavLink>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon-right" viewBox="0 0 24 24" fill="currentColor" role="presentation">
                            <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"></path>
                        </svg>
                    </NavLink>
                </div>

                <div style={{ borderTop: "1px solid #e7e7e7", padding: "15px 0 10px 0" }}>
                    <NavLink className='movie-details-left'>Country of origin</NavLink>
                    <NavLink className='movie-details-right'>India</NavLink>
                </div>
                <div style={{ borderTop: "1px solid #e7e7e7", padding: "15px 0 10px 0" }}>
                    <NavLink className='movie-details-left'>Language</NavLink>
                    <NavLink className='movie-details-right'>Hindi</NavLink>
                </div>
                <div style={{ borderTop: "1px solid #e7e7e7", padding: "15px 0 10px 0", display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <NavLink className='movie-details-left'>Also known as</NavLink>
                        <NavLink className='movie-details-right'>India</NavLink>
                    </div>
                    <NavLink>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon-right" viewBox="0 0 24 24" fill="currentColor" role="presentation">
                            <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"></path>
                        </svg>
                    </NavLink>
                </div>

                <div style={{ borderTop: "1px solid #e7e7e7", padding: "15px 0 10px 0", display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <NavLink className='movie-details-left'>Filming locations</NavLink>
                        <NavLink className='movie-details-right'>Jeddah, Saudi Arabia (unknown)</NavLink>
                    </div>
                    <NavLink>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon-right" viewBox="0 0 24 24" fill="currentColor" role="presentation">
                            <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"></path>
                        </svg>
                    </NavLink>
                </div>

                <div style={{ borderTop: "1px solid #e7e7e7", padding: "15px 0 10px 0", display: "flex",justifyContent:"space-between"}}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <NavLink className='movie-details-left'>Production companies</NavLink>
                        <NavLink className='movie-details-right'>Jio Studios</NavLink>
                        <p>.</p>
                        <NavLink className='movie-details-right'>Rajkumar Hirani Films</NavLink>
                        <p>.</p>
                        <NavLink className='movie-details-right'>Red Chillies Entertainment</NavLink>
                    </div>
                    <NavLink>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon-right" viewBox="0 0 24 24" fill="currentColor" role="presentation">
                        <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"></path>
                    </svg>
                </NavLink>
                </div>
                <div style={{ borderTop: "1px solid #e7e7e7", padding: "15px 0 10px 0",display: "flex",justifyContent:"space-between" }}>
                    <NavLink className='movie-details-left'>See more company credits at IMDbPro</NavLink>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon-right" viewBox="0 0 24 24" fill="currentColor" role="presentation">
                        <path d="M16 16.667H8A.669.669 0 0 1 7.333 16V8c0-.367.3-.667.667-.667h3.333c.367 0 .667-.3.667-.666C12 6.3 11.7 6 11.333 6h-4C6.593 6 6 6.6 6 7.333v9.334C6 17.4 6.6 18 7.333 18h9.334C17.4 18 18 17.4 18 16.667v-4c0-.367-.3-.667-.667-.667-.366 0-.666.3-.666.667V16c0 .367-.3.667-.667.667zm-2.667-10c0 .366.3.666.667.666h1.727L9.64 13.42a.664.664 0 1 0 .94.94l6.087-6.087V10c0 .367.3.667.666.667.367 0 .667-.3.667-.667V6h-4c-.367 0-.667.3-.667.667z"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails
