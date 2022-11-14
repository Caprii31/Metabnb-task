import React from 'react'
import logoImg from '../../assets/images/logo-img.png'
import logoText from '../../assets/images/logo-text.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <div id="logo__container">
          <img src={logoImg} alt="" id="logo__img" />
          <img src={logoText} alt="" id="logo__img" />
        </div>
        <div id="nav__list">
          <Link to='/home' className="nav__list--item">Home</Link>
          <Link to='/place-to-stay' className="nav__list--item">place to stay</Link>
          <Link to='/nfs' className="nav__list--item">nfs</Link>
          <Link to='/community' className="nav__list--item">community</Link>
        </div>
        <button className="nav__btn btn">connect to wallet</button>
    </>
  )
}

export default Navbar