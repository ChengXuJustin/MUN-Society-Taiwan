import React from 'react'
import '../css/event_slide.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Event_slide = ({ listings }) => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    return (
        <div className="Event_slide PageXContainer">
            <Slider >
                {listings.map((item, index) => (
                    <div className="item" key={index}>
                        <div className="pic">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="txt">
                            <h1>{item.time}</h1>
                            <h2>{item.event}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Event_slide