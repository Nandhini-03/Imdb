import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import WatchCard2 from '../components/WatchCard2'

function TopPicks() {
    const [isHover,setisHover]=useState(false)
    const [hoverSignin,setHoverSignin] =useState(false)
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

    const handleMouseEnterSignIn=() =>
    {
        setHoverSignin(true)
    }

    const handleMouseLeaveSignIn=() =>
    {
        setHoverSignin(false)
    }

    const getStylesSignin=() =>
    {
        return{
            textDecoration:hoverSignin?"underline" : "none"
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("request top picks")
                const response = await axios.get('https://imdb-backend-r3r6.onrender.com/title/topPicks')
                .then(response =>
                    {
                        setArray(response.data)
                        console.log("Top picks")
                        console.log('Response:', response.data);
                        // console.log(array)
                    })
            }
            catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData()
    }, []);



  return (
    <div className='movies-top-picks-section'>
        <div className='movie-top-picks-heading'>
            <NavLink to='' className='movie-top-picks-button'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div style={{ display: "flex" }}>
                <div className='heading-start'></div>
                <div className='movie-top-picks'>Top picks</div>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" style={getStyles()} class="top-picks-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation">
                    <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path>
                </svg>
                </div>
            </NavLink>

            <div className='movie-watchlist-recommendation'>Sign in to rate and Watchlist for personalized recommendations</div>
        </div>

        <div className='sign-in-and-cards'>
            <NavLink className='sign-in-link' 
                onMouseEnter={handleMouseEnterSignIn}
                onMouseLeave={handleMouseLeaveSignIn}
                style={getStylesSignin()}>Sign In</NavLink>
        </div>


        {
            array && <WatchCard2 array={array}/>
        }
    </div>
  )
}

export default TopPicks
