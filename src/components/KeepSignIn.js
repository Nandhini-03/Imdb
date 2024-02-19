import React from 'react'

function KeepSignIn({handleClick}) {
    console.log("Keep sign in content")

    const closeButton = () =>
    {
        handleClick(false)
    }


  return (
    <div className='keep-signin-details-section'>
      <div className='keep-signin-top'>
        <div style={{marginTop:"10px"}}>"Keep Me Signed In" Checkbox</div>
        <button style={{border:"none"}} onClick={closeButton}>
            <i className='keep-signin-close'/>
        </button>
      </div>

      <div className='keep-signin-bottom'>
        <p style={{marginBottom:"10px"}}>
            Choosing "Keep me signed in" reduces the number of times you're asked to Sign-In on this device.
        </p>
        {/* <br/> */}
        <p>
            To keep your account secure, use this option only on your personal devices.
        </p>
      </div>
    </div>
  )
}

export default KeepSignIn
