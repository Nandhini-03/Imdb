import React from 'react'
import { NavLink } from 'react-router-dom'
import InTheaters from './InTheaters'

function ExclusiveVideos() {
  return (
    <div>
      <h2 className='headings-type2'>Exclusive videos</h2>

      <div>
        <NavLink to='' className='top-picks-button'>
            <div style={{ display: "flex" }}>
                <div className='heading-start'></div>
                <div className='top-picks'>In theaters</div>
                {/* <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" style={getStyles()} class="top-picks-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation">
                    <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path>
                </svg> */}
            </div>
        </NavLink>
      </div>
    </div>
  )
}

export default ExclusiveVideos
