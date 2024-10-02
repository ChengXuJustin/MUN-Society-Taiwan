// import React from 'react'
import '../css/content.css'
import '../css/index.css'
import PropTypes from 'prop-types'

const IntroLists = ({listings1}) => {

  const renderItems = listings1.map((item) => {
  
    const renderParagraph = item.content.map((paragraph, index) => {
      return( 
        <p className="paragraph PageXContainer" key={index}>{paragraph}</p>
      )
    })

    return (
      <div key={item.id} className="intro">
        <h1 className="topic">{item.topic}</h1>
        {renderParagraph}
      </div>
    )
  });


  return (
      {renderItems}
  )

}


IntroLists.propTypes = {
  listings: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
          topic: PropTypes.string.isRequired,
          content: PropTypes.string.isRequired,
      })
  ).isRequired,
}

export default IntroLists