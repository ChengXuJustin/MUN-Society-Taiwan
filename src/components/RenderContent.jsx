import React from 'react'

const RenderContent = ({ listings }) => {
    return (
        <div className="darkBg container">
            {listings.map((item, index) => (
                <section key={index} style={{marginBottom:"150px"}}>
                    <h1 className="topic darkBg">{item.topic}</h1>
                    {item.content.map((paragraph, index) => (
                        <p
                            key={index}
                            className="content_P PageXContainer">
                            {paragraph}
                        </p>
                    ))}
                </section>
                
            ))}
        </div>
    );
};

export default RenderContent