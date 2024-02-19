import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function CreateAccountForm() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [password2,setPassword2] = useState('')
  const [errors, setErrors] = useState({});
  const [submitted,setSubmitted] = useState(false)

  const handleChange = (e, field) => {
    const value = e.target.value;

    switch (field) {
      case 'name':
        setName(value);
        break;
      case 'mail':
        setMail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'password2':
        setPassword2(value)  
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    console.log("Submitted value")
    console.log(submitted)
    e.preventDefault();
    const newErrors = {};

    if (name.trim() === '') {
      newErrors.name = 'Enter your name';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(mail)) {
      newErrors.mail = 'Enter a valid email address';
    }

    if(password.trim() === '')
    {
        newErrors.password='Enter your password'
    }

    if (password != password2) {
      newErrors.password2 = 'Passwords must match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    //   return;
    }
    console.log("setSubmitted")
    setSubmitted(true)


    console.log('Form submitted');
  };


    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("request")
                const response = await axios.post('https://imdb-backend-r3r6.onrender.com/user/register', {
                    "userId": crypto.randomUUID(),
                    "name": name,
                    "email": mail,
                    "password": password,
                });

                console.log('Response:', response.data);
            }
            catch (error) {
                console.error('Error:', error);
            }
        };

        if (submitted) {
            fetchData();
        }

        // return () => {
        //     setSubmitted(false);
        //   };
    }, [submitted]);


    return (
        <div>
            <div style={{height:"100px"}}>
                {submitted && Object.keys(errors).length > 0 && (
                    <div style={{ color: 'red' }}>
                        There was a problem
                        <ul>
                            {Object.values(errors).map((error, index) => (
                                <li key={index}>{error}</li>
                            ))}
                        </ul>
                    </div>
                )}

            </div>

            <form >
                <div className='name-password-2'>
                    <h1 className='create-account-heading'>Create account</h1>
                    <div className='form-details'>
                        <label className='input-label'>Your name</label>
                        <input
                            placeholder='First and last name'
                            value={name}
                            onChange={(e) => handleChange(e, 'name')}
                            className='name-input'
                        />
                    </div>

                    <div className='form-details'>
                        <label className='input-label'>Email</label>
                        <input
                            className='name-input'
                            type='email'
                            value={mail}
                            onChange={(e) => handleChange(e, 'mail')}
                        />
                    </div>

                    <div className='form-details'>
                        <label className='input-label'>Password</label>
                        <input
                            placeholder='at least 8 characters'
                            type='password'
                            value={password}
                            className='name-input'
                            onChange={(e) => handleChange(e, 'password')}
                        />
                        <div style={{display:"flex"}}>
                            <i className='i-icon'></i>
                            <div style={{marginLeft:"15px",marginTop:"5px",fontSize:"13px"}}>Passwords must be at least 8 characters</div>
                        </div>
                    </div>

                    <div className='form-details'>
                        <label className='input-label'>Re-enter password</label>
                        <input
                            type='password'
                            value={password2}
                            className='name-input'
                            onChange={(e) => handleChange(e, 'password2')}
                        />
                    </div>

                    <button type='submit' className='create-account-button2' onClick={handleSubmit}>
                        {/* <div className='create-account-button2'> */}
                            <span>Create your IMDb account</span>
                            {/* <button>Create your IMDb account</button> */}
                        {/* </div> */}
                    </button>

                    <div>
                        <div className='gradiant-style'></div>
                        <div  className='create-to-signin'>Already have an account?
                            <NavLink to='signIn-PhoneNumber' className='create-to-signin-styles'>Sign In
                                <div className='create-to-signin-icon'></div>
                            </NavLink>
                        </div>
                    </div>

                </div>

            </form>
        </div>
    );
}

export default CreateAccountForm;
