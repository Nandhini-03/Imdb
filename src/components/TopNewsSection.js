import React from 'react'
import { NavLink } from 'react-router-dom'


const array=[
  {
    image:""
  }
]

function TopNewsSection() {
  return (
    <div className='top-news-section'>
      <NavLink>
        <img className='top-news-image'src='https://m.media-amazon.com/images/M/MV5BODJlNWQ4ZjUtYjRhNi00NGQ1LWE3YTItYjRmZGI3YzI4YTEyXkEyXkFqcGdeQXVyMTA2MDIzMDE5._V1_QL75_UY266_CR110,0,180,266_.jpg' />
      </NavLink>

      <div className='top-news-content'>
        <div>Box Office:'Aquaman and the Lost Kingdom' Opens to $80 Million</div>
        <div className='top-news-date'>Dec 24 Variety-Film News</div>
      </div>
    </div>
  )
}

export default TopNewsSection
