import "./aboutcontent.css";

import React from 'react'
import { Link } from "react-router-dom";
import yo from "../assets/yo.png"

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>I am a full stack developer Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Rem quas fugit id doloremque cupiditate asperiores!
                    Modi vel voluptates nam, quod cum nesciunt dicta aliquam,
                    fugit, sed qui corporis sequi natus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus error porro fugit dolorum totam libero ipsam beatae eligendi recusandae illo quasi
                    a ullam maiores quos consequuntur expedita, tempora deleniti. Eveniet!
                </p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <img src={yo} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default AboutContent
