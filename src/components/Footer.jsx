import "./footer.css";
import React from 'react';
import {FaHome, FaPhone, FaMailBulk,
        FaLinkedin,FaGithub,FaTwitter} from "react-icons/fa";


const Footer = () => {
    return (
        <div className="footer" id="/contact">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color:"#fff", marginRight:"1rem"}}/>
                        <div>
                        <p> Santa Fe Capital</p>
                        <p>Santa Fe</p>
                        <p>Argentina.</p>
                    </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{color:"#fff", marginRight:"1rem"}}/>
                        +54 3404 15415091
                        </h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"1rem"}}/>
                        corcicoagustin@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>Social Networks</h4>
                    <p>Aca podria escribir alguna informacion personal, recomendar mis redes, alguna frase x o tranquilamente no pongo nada.</p>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/agustin-corcico-b284b114a/" target="_blank" rel="noreferrer noopener">
                        <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                        </a>
                        <a href="https://github.com/AgusCorcico" target="_blank" rel="noreferrer noopener">
                        <FaGithub size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                        </a>
                        <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer