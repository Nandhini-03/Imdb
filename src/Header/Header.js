import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Search from './Search'
import ImdbPro from './ImdbPro'
import ImdbProHover from './ImdbProHover'
import Wishlist from './Wishlist'
import MenuDrpDwn from '../components/MenuDrpDwn'
import SignInMain from '../components/SignInMain'

function Header() {
  return (
    <div style={{display:"flex",backgroundColor:"black",paddingTop:"10px",paddingBottom:"10px"}}>
      <Logo />
      <Menu />
      <Search />
      {/* <ImdbPro /> */}
      <ImdbProHover />
      <Wishlist />
      <SignInMain />
      {/* <MenuDrpDwn /> */}
    </div>
  )
}

export default Header
