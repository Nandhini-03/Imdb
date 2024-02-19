import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function StreamingNavlink({to,name,isActive,onClick}) {
    const [hover,setHover] = useState(false)

    const handleMouseEnter = () => {
        setHover(true);
      };
    
      const handleMouseLeave = () => {
        setHover(false);
      };

      const getStyles=() =>
      {
        return hover?
        {
            background: "rgba(255, 255, 255, 0.08)"
        }
        :
        {
            backgroundColor:"rgb(0, 0, 0)"
        }
      }

      const activeStyle=() =>(
      {
         borderBottom : isActive ? "3px solid #f5c518" : "3px solid rgb(0, 0, 0)"
      })

  return (
    <div>
        <NavLink to={to} 
        className='explore-streaming-routes'
        style={{...getStyles(),...activeStyle()}}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick} >
            <div>{name}</div>
        </NavLink>
    </div>
  )
}

export default StreamingNavlink
