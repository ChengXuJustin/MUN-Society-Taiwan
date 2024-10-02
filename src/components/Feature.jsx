import React from 'react'
import '../css/feature.css'

const Feature = ( {listings} ) => {
  return (

    <div className='feature'>
        {listings.map((item, index) => (
            <div className="item" key={index} style={{backgroundImage:`url(${item.img})`}}>
                <h1>{item.title}</h1>
            </div>

        ))}

    </div>
    
    
  )
}

export default Feature