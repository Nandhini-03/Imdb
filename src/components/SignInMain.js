import React from 'react'
import { NavLink } from 'react-router-dom'

function SignInMain() {
    const style={
        textDecoration:"none",
        color:"white",
        paddingTop:"5px"
    }
  return (
    <nav style={{marginTop:"10px",marginLeft:"20px"}}>
        <NavLink style={style} to='signin'>Sign In</NavLink>
    </nav>
  )
}

export default SignInMain
