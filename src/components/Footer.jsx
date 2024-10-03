// import React from 'react'
import mstIcon from '../data/src.json'
import { Link, NavLink } from 'react-router-dom'
import '../css/footer.css'

const Footer = () => {
  return (
    <footer className="container">
        <div className="footer_top">
            <div className="footer_pic">
                <Link to="/MUN-Society-Taiwan">
                    <img src={mstIcon.logo_icon_footer} alt="" />
                </Link>
            </div>
            <div className="contact_text">
                <ul className="footer_nav">
                    <li><NavLink to="/MUN-Society-Taiwan/about" style={{color:"#ffffff"}}>About Us</NavLink></li>
                    <li><NavLink to="/MUN-Society-Taiwan/events" style={{color:"#ffffff"}}>Events</NavLink></li>
                    <li><NavLink to="/MUN-Society-Taiwan/contact" style={{color:"#ffffff"}}>Contact</NavLink></li>
                </ul>
                <ul className="footer_nav">
                    <a href=""><li>Phone:  +886 972-859-487</li></a>
                    <a href=""><li>Email:  taipei@worldmun.org</li></a>
                </ul>
            </div>
        </div>
        <p className='copyright'>Copyright &copy;2024 MUN Society Taiwan All rights reserved</p>
    </footer>
  )
}

export default Footer