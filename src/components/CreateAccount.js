import React from 'react'
import { NavLink } from 'react-router-dom'
import CreateAccountForm from './CreateAccountForm'
import HelpConditionsPrivacy from './HelpConditionsPrivacy'

function CreateAccount() {
  console.log("Create Account")
  return (
    <div className='create-account-section'>

      <div className='create-account-logo'>
        <NavLink to='/'>
          <img src='https://m.media-amazon.com/images/G/01/imdb/authportal/images/www_imdb_logo._CB667618033_.png' />
        </NavLink>
      </div>

      <div className='enter-details-part'>
        <div className='name-password'>
          <CreateAccountForm />
        </div>
      </div>

      <HelpConditionsPrivacy />
    </div>
  )
}

export default CreateAccount
