import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SigninPerks from './SigninPerks'
import { FcExpand } from "react-icons/fc";
import Header from '../Header/Header';


function SignInOptions() {
    const [value, setValue] = useState(false)
    const ShowOptions = () => {
        setValue(!value)
    }

    return (

        <>
            <Header />
            <div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "rgb(208,207,203)", position: "relative" }}>

                    <div className='sign-in-page'>
                        <div style={{ marginTop: "35px" }}>

                            <div className='signin-options'>

                                <div>
                                    <h3 style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "15px", letterSpacing: "1px" }}>Sign in</h3>
                                    <nav>
                                        <NavLink to='Signin-Imdb' className='box' >
                                            <div>
                                                <span className='signin-imdb-icon signin-icon-style'></span>
                                                <span className='signin-text-decor'>Sign in with IMDb</span>
                                            </div>
                                        </NavLink>
                                        <NavLink to='Signin-amazon' className='box' >
                                            <div>
                                                <span className='signin-amazon-icon'></span>
                                                <span className='signin-text-decor'>Sign in with Amazon</span>
                                            </div>
                                        </NavLink>
                                        <NavLink to='Signin-google' className='box' >
                                            <div>
                                                <span className='signin-google-icon'></span>
                                                <span className='signin-text-decor'>Sign in with Google</span>
                                            </div>
                                        </NavLink>
                                        <NavLink to='Signin-apple' className='box' >
                                            <div>
                                                <span className='signin-apple-icon'></span>
                                                <span className='signin-text-decor'>Sign in with Apple</span>
                                            </div>
                                        </NavLink>
                                        <div>
                                            {
                                                value && (
                                                    <NavLink to='Signin-facebook' className='box' >
                                                        <div>
                                                            <span className='signin-facebook-icon'></span>
                                                            <span className='signin-text-decor'>Sign in with Facebook</span>
                                                        </div>
                                                    </NavLink>
                                                )
                                            }
                                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <Link onClick={ShowOptions} style={{ display: value ? "none" : "block", textDecoration: "none", color: "#136cb2", fontSize: "15px" }}>Show more options</Link>
                                                <FcExpand style={{ margin: "0 5px", display: value ? "none" : "block" }} />
                                                {/* <div className='arrow-symbol'></div> */}
                                            </div>
                                        </div>
                                    </nav>
                                </div>

                                <div className='sign-in-divider'>
                                    <div className='divider-style before-divider'></div>
                                    <span style={{ marginLeft: "115px" }}>or</span>
                                    <div className='divider-style after-divider'></div>
                                </div>

                                <div className='create-account-button'>
                                    <NavLink to='createAccount' className='create-account-button-text'>Create a New Account</NavLink>
                                </div>

                                <div className='conditions-privacy'>
                                    By signing in, you agree to IMDb's{' '}
                                    <Link to="conditions-of-use" style={{ textDecoration: "none" }}>Conditions of Use</Link> and{' '}
                                    <Link to="privacy-policy" style={{ textDecoration: "none" }}>Privacy Policy</Link>.
                                </div>

                            </div>

                        </div>
                        <SigninPerks />
                    </div>


                    {/* <SigninPerks /> */}

                    <div className='recently-viewed-smaller'>
                        <div style={{ padding: "16px 20px" }}>
                            <div className='recently-viewed-heading-section'>
                                <div className='recently-viewed-heading'>Recently Viewed</div>
                                <Link className='recently-viewed-clear'>clear your history</Link>
                            </div>
                            <div></div>
                        </div>
                    </div>

                </div>
                <div style={{ height: '120px', backgroundColor: "rgb(208,207,203)" }}>

                </div>


                <Outlet />
            </div>
        </>
    )
}

export default SignInOptions
