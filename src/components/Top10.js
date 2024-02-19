import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import WatchCard from './WatchCard'

function Top10() {
    const [array,setArray] = useState([])

    useEffect(() =>
    {
        const fetchData=async() =>
        {
            try{
                const response=await axios.get('https://imdb-backend-r3r6.onrender.com/title/top10')
                console.log("Top 10")
                console.log(response.data)
                setArray(response.data)
            }
            catch(error){
                console.log(error)
            }
        }
        fetchData();
    },[])
    
  return (
    <div className='top10-section'>

      <div className='top10-heading'>
            <NavLink to='' className='top10-button'>
                <div style={{ display: "flex" }}>
                <div className='heading-start'></div>
                <div className='top-10'>Top 10 on IMDb this week</div>
                </div>
            </NavLink>
        </div>

        {
            array && <WatchCard array={array}/>
        }
    </div>
  )
}

export default Top10
