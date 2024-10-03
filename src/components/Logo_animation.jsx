// import React from 'react'
import mstIcon from '../data/src.json';
import { Link } from 'react-router-dom';
import '../css/explore_btn.css'

const Logo_animation = () => {
  return (
    <div style={{marginTop:"-150px"}}>
          <div className="Logo_Container">
            <video className="Logo_video" autoPlay muted playsInline>
              <source src='https://live.staticflickr.com/video/54017435822/af31cec194/1080p.mp4?s=eyJpIjo1NDAxNzQzNTgyMiwiZSI6MTcyNzE4ODA2OSwicyI6ImZmZGZjNTRhY2I3YWExM2MxZjU0MWI1NTAxYzQ0ZmY5YmU2MGZiMzMiLCJ2IjoxfQ' type='video/mp4' />
            </video>
            <div className="hidenBox"></div>
          </div>
          <div>
            <Link to="MUN-Society-Taiwan/about" className="Explore">
              <li className='innerTxt'>Explore MST</li>
            </Link>
          </div>
    </div>
  )
}

export default Logo_animation