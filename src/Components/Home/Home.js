import React from 'react'

import { Link } from "react-scroll";
import { Element } from 'react-scroll'

import "../../styles/HomeStyles.css"


function Home() {
  return (
    <Element name="Home">
       <div className="home">
               <div className="content">
                  <h6 className="intro">I'm</h6>
                  <h1 className="head_text"> APARNA MAHALAKSHMI R </h1>
                  <p className="designation">  FULL STACK DEVELOPER  </p>
        
                  <div className="hero-btns">
                      <Link to="project" className="btn-light">
                          View My Work
                      </Link>
        
                      <Link to="contact" className="work-btn">
                          Get In Touch
                      </Link>
                  </div>
                </div>
          </div>
    </Element>
  )
}

export default Home