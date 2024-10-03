// import React from 'react'
import '../css/colors.css'
import '../css/meet_team.css'
import PropTypes from 'prop-types'

const Meet_team = ({listings}) => {
    
    const renderItems = listings.map((item, index) => {
        
        const renderContent = item.content.map((paragraph, index) => {
            return (
                <p key={index}>{paragraph}</p>
            )
        })

        return (
            <div className="MeetTeam PageXContainer" key={index}>
                <div className="pic">
                    <img className="avatar" src={item.avatar} alt="" />
                </div>
                <div className='text'>
                    <div className="top_title">
                        <h1 style={{borderRight:"3px solid #000", paddingRight:"10px", marginRight:"10px"}}>{item.title}</h1>
                        <h1>{item.name}</h1>
                    </div>
                    <h3>{item.university}</h3>
                    {renderContent}
                </div>
            </div>
        )
        
    })


    return (
        <div>
            <div className='topic'>Meet the team</div>
            {renderItems}
        </div>
    )
}

Meet_team.propTypes = {
    listings: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            title: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            university: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            content: PropTypes.array.isRequired,
        })
    ).isRequired,
}

export default Meet_team