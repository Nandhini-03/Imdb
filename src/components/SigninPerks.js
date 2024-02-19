import React from 'react'

function SigninPerks() {
  return (
    <div className='signin-perks'>
      <h1>Benefits of your free IMDb account</h1>
      <p>
        <strong style={{fontSize:"13px"}}>Personalized Recommendations</strong>
        {/* <br></br> */}
        <p style={{fontSize:"12px",}}>Discover shows you'll love.</p>
      </p>
      <p>
        <strong style={{fontSize:"13px"}}>Your Watchlist</strong>
        {/* <br></br> */}
        <p style={{fontSize:"12px"}}>Track everything you want to watch and receive e-mail when movies open in theaters.</p>
      </p>
      <p>
        <strong style={{fontSize:"13px"}}>Your Ratings</strong>
        {/* <br></br> */}
        <p style={{fontSize:"12px"}}>Rate and remember everything you've seen.</p>
      </p>
      <p>
        <strong style={{fontSize:"13px"}}>Contribute to IMDb</strong>
        {/* <br></br> */}
        <p style={{fontSize:"12px"}}>Add data that will be seen by millions of people and get cool badges.</p>
      </p>
    </div>
  )
}

export default SigninPerks
