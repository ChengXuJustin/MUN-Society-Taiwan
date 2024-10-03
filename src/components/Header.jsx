// import React from 'react'
// import MediaIcon from '../data/icon.json';
import mstIcon from '../data/src.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram, faSquareFacebook, faSquareBehance } from '@fortawesome/free-brands-svg-icons';
import '../css/header.css'
import { Link } from 'react-router-dom'


const Header = () => {

  const getOpacity_status = () => {
    switch (location.pathname) {
      case '/MUN-Society-Taiwan/' :
        return "0"
      default: return "1"
    }
  }


  return (
    <>
      <header style={{opacity: getOpacity_status()}}>
        <div className="logo_container">
          <Link to="MUN-Society-Taiwan/">
            <img className="logo" src={mstIcon.logo_icon} alt="MST Logo" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link className="navLink" to="MUN-Society-Taiwan/about">About</Link>
            </li>
            <li>
              <Link className="navLink" to="MUN-Society-Taiwan/events">Events</Link>
            </li>
            <li>
              <Link className="navLink" to="MUN-Society-Taiwan/contact">Contact</Link>
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