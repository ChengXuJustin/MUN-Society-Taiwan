import React from 'react'

const Bring_people = ({ listings }) => {
    return(
        <div className="container">
            {listings.map((item, index) => (
                <div key={index}>
                    <h1 className="topic_light">{item.topic}</h1>
                    <h2 className="sub_topic_light">{item.sub_topic}</h2>
                    <p className="content_light">{item.content}</p>
                </div>
            ))}
        </div>
    )
}

export default Bring_people