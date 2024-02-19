import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import BornTodaySection from './BornTodaySection'

function BornToday() {
  const [hover, isHover] = useState(false)
  const handleMouseEnter = () => {
    isHover(true)
  }

  const handleMouseLeave = () => {
    isHover(false)
  }

  const getStyles = () => {
    return {
      fill: hover ? "#f5c518" : "white"
    }
  }
  return (
    <div className='born-today-date'>

      <NavLink to='' className='born-today-button'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <div style={{ display: "flex" }}>
          <div className='heading-start'></div>
          <div className='born-today'>Born today</div>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" style={getStyles()} class="born-today-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation">
            <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path>
          </svg>
        </div>
      </NavLink>

      <div className='born-date'>
        People born on December 24
      </div>

      <BornTodaySection />

    </div>
  )
}

export default BornToday
