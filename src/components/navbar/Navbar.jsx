import React from 'react'
import './navbar.css'
import { ReactComponent as Logo } from '../../assets/logo.svg';
export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-left"><Logo className='logo'/></div>
      <div className="nav-center">
        <div className="nav-link"><h2>How it works?</h2></div>
        <div className="nav-link"><h2>Features</h2></div>
        <div className="nav-link"><h2>About us</h2></div>
      </div>
      <div className="nav-right">
        <div className='login-button-wrapper'>
          <button className='login-button'>Login</button>
        </div>
      </div>
    </div>
  )
}
