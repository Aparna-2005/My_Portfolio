import React from 'react'
import { Element } from "react-scroll";

function Skills() {
  return (
    <Element name="skills">
            <div className="container" data-aos="fade-up">
              <div className="text-center">
                <h2 className="fw-bold">Skills</h2>
              </div>
    
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                 <div className="skills-content skills-animation">
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
                  <span className="skill"><span>Next js</span> <i className="val">70%</i></span>
                </div>
                </div>
    
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="skills-content skills-animation">
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{"width":"90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="90"></div>
                  </div>
                  <span className="skill"><span>Python</span> <i className="val">90%</i></span>

                  <div className="progress">
                     <div className="progress-bar" role="progressbar" style={{"width":"70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="70"></div>
                  </div>
                  <span className="skill"><span>Django</span> <i className="val">70%</i></span>

                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{"width":"80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="80"></div>
                  </div>
                  <span className="skill"><span>Control Version(Git)</span> <i className="val">80%</i></span>

                  {/* <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{"width":"70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="70"></div>
                  </div>
                  <span className="skill"><span>Next js</span> <i className="val">70%</i></span> */}
                </div>
                </div>
              </div>
            </div>
        </Element>
  )
}

export default Skills