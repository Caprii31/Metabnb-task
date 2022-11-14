import React from 'react'
import logoImg from '../../assets/images/logo-img.png'
import logoText from '../../assets/images/logo-text.png'
import { Link } from 'react-router-dom'
import './index.scss'

function Navbar() {
  return (
    <nav id='nav'>
        <div id="nav__logo">
          <img src={logoImg} alt="" id="nav__logo--img" />
          <img src={logoText} alt="" id="nav__logo--text" />
        </div>
        <div id="nav__list">
          <Link to='/home' className="nav__list--item">Home</Link>
          <Link to='/place-to-stay' className="nav__list--item">place to stay</Link>
          <Link to='/nfs' className="nav__list--item">nfs</Link>
          <Link to='/community' className="nav__list--item">community</Link>
        </div>
        <button className="nav__btn btn">connect to wallet</button>
    </nav>
  )
}

export default Navbar