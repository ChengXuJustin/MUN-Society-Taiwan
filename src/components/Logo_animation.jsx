// import React from 'react'
import mstIcon from '../data/src.json';
import { Link } from 'react-router-dom';
import '../css/explore_btn.css'

const Logo_animation = () => {
  return (
    <div style={{marginTop:"-150px"}}>
          <div className="Logo_Container">
            <video className="Logo_video" autoPlay muted playsInline>
              <source src={mstIcon.logo_gif} type='video/mp4' />
            </video>
            <div className="hidenBox"></div>
          </div>
          <div>
            <Link to="/about" className="Explore">
              <li className='innerTxt'>Explore MST</li>
            </Link>
          </div>
    </div>
  )
}

export default Logo_animation