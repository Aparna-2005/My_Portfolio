import React from 'react'

import { Element } from 'react-scroll'


import "../../styles/AboutStyles.css"

function About() {
  return (
    <Element name="about">
      <div className='container' data-aos="fade-up" data-aos-delay="100">
        <div className="card border-0">
          <div className="card-body">
            <div className="row gy-4">

              <div className="col-md-6">
                <div className="row justify-content-between gy-4">
                  <div className="col-lg-5">
                    <img src="images/Aparna_image.png" className="img-fluid" alt="My Photo"/>
                  </div>
                  <div className="col-lg-7 about-info">
                    <p><strong>Name: </strong> <span>Aparna Mahalakshmi R</span></p>
                    <p><strong>Profile: </strong> <span>Full stack developer</span></p>
                    <p><strong>Email: </strong> <span>aparnaravi205@gmail.com</span></p>
                    <p><strong>Phone: </strong> <span>(91) 90476 62646</span></p>
                  </div>
                </div>

                {/* <div className="skills-content skills-animation">
                  <h5>Skills</h5>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{"width":"90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="90"></div>
                  </div>
                  <span className="skill"><span>HTML & CSS</span> <i className="val">90%</i></span>

                  <div className="progress">
                     <div className="progress-bar" role="progressbar" style={{"width":"70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="70"></div>
                  </div>
                  <span className="skill"><span>Javascript</span> <i className="val">70%</i></span>

                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{"width":"80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="80"></div>
                  </div>
                  <span className="skill"><span>React</span> <i className="val">80%</i></span>

                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{"width":"70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="70"></div>
                  </div>
                  <span className="skill"><span>Djando</span> <i className="val">70%</i></span>

                </div> */}

              </div>


              <div className="col-md-6">
                <div className="about-me">
                  <h4>About me</h4>
                  <p style={{"font-weight":"bold"}}>
                    <u>Who Am I?</u>
                  </p>
                  <p>
                    Hello! I'm a passionate Freelance Full Stack Developer with professional experience in designing and developing responsive, user-friendly, and performance-driven web applications.
                  </p>

                  <p>
                    My expertise includes React.js, Next.js, JavaScript, Python, Django, HTML5, CSS3, Bootstrap, MySQL, Git, and RESTful APIs. I enjoy building applications that are not only visually appealing but also scalable, secure, and easy to maintain.
                  </p>

                  <p>
                    I believe in clear communication, timely delivery, and writing clean code that follows industry best practices. Every project I work on is built with a strong focus on quality, performance, and user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    </Element>
  )
}

export default About