import "./navbar.css";
import {FaBars, FaTimes} from "react-icons/fa";
import React, { useState } from 'react';
/* import { Link } from "react-router-dom"; */
import {Link} from 'react-scroll';


const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] =useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100){
            setColor(true);
        }else{
            setColor(false);
        }
    };
    window.addEventListener("scroll", changeColor);

    return (
        <div className={ color 
            ? "header header-bg"
            : "header" }>
            <Link to="home">
                <h1>Portfolio</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/home" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
{/*                     <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
                        Home
                    </Link> */}
                </li>
                <li>
                    {/* <Link to="/about" spy={true} smooth={true} offset={50} duration={500}>About</Link> */}
                    <Link to="/about" spy={true} smooth={true} offset={50} duration={500}>
                        <div id="about">About</div>
                    </Link>
                </li>
                <li>
                    {/* <Link to="/project">Project</Link> */}
                    <Link to="/project" spy={true} smooth={true} offset={50} duration={500}>
                        Project
                    </Link>
                </li>
                <li>
                    {/* <Link to="/technologies">Technologies</Link> */}
                    <Link to="/technologies" spy={true} smooth={true} offset={50} duration={500}>
                        Technologies
                    </Link>
                </li>
                <li>
                    {/* <Link to="/contact">Contact</Link> */}
                    <Link to="/contact" spy={true} smooth={true} offset={50} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} style={{color:"fff"}}/>)
                    : (
                    <FaBars size={20} style={{color:"fff"}}/>)
                }
            </div>
        </div>
    )
}

export default Navbar