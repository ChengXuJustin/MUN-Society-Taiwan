import React from 'react'
import '../css/colors.css'
import '../css/meet_team.css'

const Meet_team = ({listings}) => {
    
    const renderItems = listings.map((item) => {
        
        const renderContent = item.content.map((paragraph, index) => {
            return (
                <p key={index}>{paragraph}</p>
            )
        })

        return (
            <div className="MeetTeam PageXContainer">
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

export default Meet_team