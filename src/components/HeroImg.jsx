import "./heroimg.css";
import React from 'react';
import IntroImg from "../assets/intro.jpg";
import { Link } from "react-router-dom";


const Heroimg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img src={IntroImg} alt="IntroImg" className="intro-img" />
            </div>
            <div className="content">
                <p>HI, I'M AGUSTIN</p>
                <h1 className="title">Full Stack Developer.</h1>
                <div>
                    <Link to="/project" className="btn">
                        PROJECTS
                    </Link>
                    <Link to="/contact" className="btn btn-light">
                        CONTACT
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Heroimg;
