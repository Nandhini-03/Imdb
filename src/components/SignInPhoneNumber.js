import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import KeepSignIn from './KeepSignIn';
import HelpConditionsPrivacy from './HelpConditionsPrivacy';

function SignInPhoneNumber() {
   const [isHovered,setisHovered] = useState(false)
   const [isHovered2,setisHovered2] = useState(false)
   const [showComponent2, setShowComponent2] = useState(false)
   const [mail,setMail] = useState()
   const [password,setPassword] = useState()
   const [submitted,setSubmitted] = useState(false);

   const navigate = useNavigate();


   
   const handleClick = (bol) => {
    setShowComponent2(bol);
  };


   const handleMouseEnter=() =>
   {
    setisHovered(true)
   };

   const handleMouseLeave =() =>
   {
    setisHovered(false)
   };

   const getStyles =() =>
   {
    return isHovered ? 
    {
        textDecoration: 'underline',
        cursor: 'pointer',
        color: '#c45500'
    }

    :{
        textDecoration: 'none',
        color: '#0066c0'
    }
   };


   const handleMouseEnter2=() =>
   {
    setisHovered2(true)
   };

   const handleMouseLeave2 =() =>
   {
    setisHovered2(false)
   };

   const getStyles2 =() =>
   {
    return isHovered2 ? 
    {
        textDecoration: 'underline',
        cursor: 'pointer',
        color: '#c45500'
    }

    :{
        textDecoration: 'none',
        color: '#0066c0'
    }
   };

   const changeMail=(e) =>
   {
    setMail(e.target.value)
   }

   const changePassword=(e) =>
   {
    setPassword(e.target.value)
   }

   const handleSubmit = async () => {
    
    
    try {
        console.log({mail});
        const response = await axios.post('https://imdb-backend-r3r6.onrender.com/user/login', {
            "email": mail,
            "password": password,
        });

        
        navigate('/signin/createAccount/signIn-PhoneNumber/finalSignIn')


        console.log("userId")
        console.log('Response:', response.data);
    }
    catch (error) {
        console.error('Error:', error);
    }
   }
   


  return (
    <div className='signin-phoneNumber-section'>

      <div className='signin-imdb-logo'>
        <NavLink to='/'>
            <img src='https://m.media-amazon.com/images/G/01/imdb/authportal/images/www_imdb_logo._CB667618033_.png' />
        </NavLink>
      </div>

      <div className='signin-number-section'>
        <div className='signin-number-subsection'>
            <form className='signin-number-form'>
                <div style={{padding:"20px 26px"}}>

                    <h1 className='signin-number-heading'>Sign in</h1>
                    <div style={{marginBottom:"20px"}}>
                        <label className='signin-number'>Email or mobile phone number</label>
                        <input className='signin-number-input'type='email' onChange={changeMail}/>
                    </div>
                   
                   <div style={{marginBottom:"20px"}}>
                        <label className='signin-number-password'>Password</label>
                        <NavLink to='forgotPassword'
                            className='forgot-password'
                            style={getStyles()}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                                Forgot your password?
                        </NavLink>
                        <input className='signin-password-input' type='password' onChange={changePassword}/>
                   </div>
                    
                    {/* <NavLink to='finalSignIn' className='signin-button-style' onSubmit={handleSubmit} style={{  textDecoration: 'none'}}>
                        <div className='signin-number-button'> Sign In </div>
                    </NavLink> */}

                    <div className='signin-button-style' onClick={handleSubmit} style={{  textDecoration: 'none'}}>
                    <div className='signin-number-button'> Sign In </div>
                    </div>
                    
                    <div className='keep-signin-section'>
                        <input type='checkbox' />
                        <div className='keep-signin-content'>
                            <label style={{marginLeft:"5px"}}>Keep me signed In.</label>
                            <div className='keep-signin-details'
                                style={getStyles2()}
                                onMouseEnter={handleMouseEnter2}
                                onMouseLeave={handleMouseLeave2}
                                onClick={() => handleClick(!showComponent2)}>
                                    Details
                                <i className='keep-signin-details-arrow'/>
                            </div>
                        </div>
                    </div>

                    <div className='new-to-imdb-section'>
                        <div>
                            <div className='divider-line-1'></div>
                            <h5 className='new-imdb-heading'>New to IMDb?</h5>
                            <div className='divider-line-2'></div>
                        </div>
                        <NavLink to='signin/createAccount' className='new-create-account-button'>
                            <span>Create your IMDb account</span>
                        </NavLink>
                    </div>
                   
                </div>
            </form>
            {showComponent2 && (
                <KeepSignIn  handleClick={handleClick}/>
            )}

        </div>
      </div>
      

      <HelpConditionsPrivacy />
    </div>
  )
}

export default SignInPhoneNumber
