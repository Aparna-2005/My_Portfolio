import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

import "../../styles/NavbarStyles.css"

export default function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        }
        else {
            setColor(false);
        }
    };
    window.addEventListener("scroll", changeColor);
    return (
        <>
            <div className={color ? "header header-bg" : "header"}>
                <Link style={{ textDecoration: "none", color: "white", fontSize: "24px", fontWeight: "bold" }}>Portfolio.</Link>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li><Link to="Home" className="link p-3">Home</Link></li>
                    <li>
                        <Link to="about" smooth={true} duration={100} offset={-50} className="link p-3"> About </Link>
                    </li>
                    <li>
                        <Link to="education" smooth={true} duration={100} offset={-50} className="link p-3">Education</Link>
                    </li>
                    <li><Link to="skills" className="link p-3">Skills</Link></li>
                    <li><Link to="certificates" smooth={true} duration={100} offset={-50} className="link p-3">Certificate</Link></li>
                    <li><Link to="project" className="link p-3">Project</Link></li>
                    <li><Link to="experience" className="link p-3">Experience</Link></li>
                    
                    <li><Link to="contact" className="link p-3">Contact</Link></li>
                </ul>
                <div className="bars" onClick={handleClick}>
                    {click ? (<FontAwesomeIcon icon={faXmark} style={{ width: "100px", height: "30px", color: "white" }} />) : (<FontAwesomeIcon icon={faBars} style={{ width: "100px", height: "30px", color: "white" }} />)}
                </div>
            </div>
        </>
    )
}
