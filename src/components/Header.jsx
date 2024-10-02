// import React from 'react'
import mstIcon from '../data/src.json';
// import MediaIcon from '../data/icon.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram, faSquareFacebook, faSquareBehance } from '@fortawesome/free-brands-svg-icons';
import '../css/header.css'
import { Link, NavLink } from 'react-router-dom'


const Header = () => {

  const getOpacity_status = () => {
    switch (location.pathname) {
      case '/' :
        return "0"
      default: return "1"
    }
  }


  return (
    <>
      <header style={{opacity: getOpacity_status()}}>
        <div className="logo_container">
          <Link to="/">
            <img className="logo" src={mstIcon.logo_icon} alt="MST Logo" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink className="navLink" to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/events">Events</NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <ul className="social_media">
          <a href="https://www.instagram.com/munsoc.tw?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'>
            <FontAwesomeIcon 
            icon={faSquareInstagram}
            // size={20}
            color='#ffffff'
            className='media_icon'
            />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61555679222438" target='_blank'>
            <FontAwesomeIcon 
            icon={faSquareFacebook}
            // size={20}
            color='#ffffff'
            className='media_icon'
            />
          </a>
          <a href="">
            <FontAwesomeIcon 
            icon={faSquareBehance}
            // size={20}
            color='#ffffff'
            className='media_icon'
            />
          </a>
        </ul>
      </header>
    </>
  )
}

export default Header