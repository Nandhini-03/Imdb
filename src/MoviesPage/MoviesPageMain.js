import React, { useEffect } from 'react'
import MoviesPageVideos from './MoviesPageVideos'
import MoviesPageTopCast from './MoviesPageTopCast'
import MoviesMoreLikeThis from './MoviesMoreLikeThis'
import MoviesPageTop from './MoviesPageTop'
import axios from 'axios'
import MovieStoryLine from './MovieStoryLine'
import MoviesUserReviews from './MoviesUserReviews'
import MoviesTopPicks from './MoviesTopPicks'
import MovieDetails from './MovieDetails'


function MoviesPageMain() {

  useEffect(() =>
  {
    const fetchData=async() =>
    {
      try{
        const response=await axios.get('https://imdb-backend-r3r6.onrender.com/')
        .then()
        .catch()
      }
      catch(error)
      {
        console.log(error)
      }
    }
    fetchData()
  },[])

  return (
    <div className='movies-whole-page'>
      <div>
        <MoviesPageTop />
        <MoviesPageVideos />
        <MoviesPageTopCast />
        <MoviesMoreLikeThis />
        <MovieStoryLine />
        <MoviesUserReviews />
        <MoviesTopPicks />
        <MovieDetails />

      </div>

      <div>Hello</div>
    </div>
  )
}

export default MoviesPageMain
