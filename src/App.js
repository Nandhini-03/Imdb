import React, { Component } from 'react';
import './App.css';
// import Header from './components/Header';
import MenuDrpdwnMain from './MenuDrpdwnMain';
import { Routes,Route, useLocation } from 'react-router-dom';
import SignInOptions from './components/SignInOptions';
import CreateAccount from './components/CreateAccount';
import SignInGoogle from './components/SignInGoogle';
import ConditionsOfUse from './components/ConditionsOfUse';
import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './Footer/Footer';
import SignInPhoneNumber from './components/SignInPhoneNumber';
import ForgotPassword from './components/ForgotPassword';
import FinalSignIn from './components/FinalSignIn';
import HomePage from './components/HomePage';
import { AuthProvider } from './components/Context';
// import WatchCard from './components/WatchCard';
// import ExploreStreaming from './components/ExploreStreaming';
// import BornToday from './components/BornToday';
// import TopNews from './components/TopNews';
// import TopPicks from './components/TopPicks';
// import Top10 from './components/Top10';
// import FanFavorites from './components/FanFavorites';
import MoviesPageMain from './MoviesPage/MoviesPageMain';
// import InTheaters from './components/InTheaters';
// import ExclusiveVideos from './components/ExclusiveVideos';


function App()
{
    const location=useLocation()
    const excludedRoutes=['/signin/createAccount/signIn-PhoneNumber','/signin/createAccount','signin/createAccount/signIn-PhoneNumber/forgotPassword']
    const requiredRoutes=excludedRoutes.includes(location.pathname)
    return (
      <AuthProvider>
      <div className="app-container">
        {/* <MoviesPageMain /> */}
       
       <MenuDrpdwnMain /> 
       <div className='main-content'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/signin' element={!requiredRoutes && <SignInOptions />} />
            <Route path='Signin-google' element={<SignInGoogle />} />
            <Route path='signin/createAccount' element={<CreateAccount />} />
            <Route path='signin/conditions-of-use' element={<ConditionsOfUse />} />
            <Route path='signin/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='signin/createAccount/signIn-PhoneNumber' element={<SignInPhoneNumber />}/>
            <Route path='signin/createAccount/signIn-PhoneNumber/forgotPassword' element={<ForgotPassword />} />
            <Route path='signin/createAccount/signIn-PhoneNumber/finalSignIn' element={<FinalSignIn />} />
          </Routes>
       </div>
      {!requiredRoutes && <Footer />}
      </div>
      </AuthProvider>
    );
}

export default App;