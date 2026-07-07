import React from 'react'
import { Element } from "react-scroll";

import "../../styles/CertificateStyles.css";

function Certificates() {

  return (
    <Element name="certificates">
          <section className="resume">
            <div className="container" data-aos="fade-up">
              <div className="text-center">
                <h2 className="fw-bold">Certifications</h2>
                {/* <p className="text-muted">
                  Some of the projects I have developed.
                </p> */}
              </div>
    
              <div className="row g-4 pt-4">
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="card h-100 shadow-sm border-0 project-card">
                      <img src="images/HTMLCSS.jpeg" alt="HTML&CSS"  className="card-img-top project-image"/>
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title fw-bold text-center">  HTML & CSS </h5>
                        <p className="card-text text-muted flex-grow-1 text-center">  Meta - Coursera </p>
                        <a href="https://drive.google.com/file/d/1KSgME_aHFhew8ACA5EzWhx8cM49XicPL/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100 mt-3"> View </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="card h-100 shadow-sm border-0 project-card">
                      <img src="images/JS.jpeg" alt="JS"  className="card-img-top project-image"/>
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title fw-bold text-center">  Javasrcipt </h5>
                        <p className="card-text text-muted flex-grow-1 text-center">  Meta - Coursera </p>
                        <a href="https://drive.google.com/file/d/18Ap1K_M8RtyXIPYvPEf_0rUQMNWAAwwF/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100 mt-3"> View </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="card h-100 shadow-sm border-0 project-card">
                      <img src="images/React.jpeg" alt="React"  className="card-img-top project-image"/>
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title fw-bold text-center">  React </h5>
                        <p className="card-text text-muted flex-grow-1 text-center">  Meta - Coursera </p>
                        <a href="https://drive.google.com/file/d/1MGt0nuumkOJoN1z6O6NpA9VRWB9JsWJZ/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100 mt-3"> View </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="card h-100 shadow-sm border-0 project-card">
                      <img src="images/NPTEL.jpeg" alt="React"  className="card-img-top project-image"/>
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title fw-bold text-center">  Programming in Java </h5>
                        <p className="card-text text-muted flex-grow-1 text-center">  NPTEL - Online Certification </p>
                        <a href="https://drive.google.com/file/d/1CZ9938pZrff06nsXFgormK4u7Y_yknwa/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100 mt-3"> View </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="card h-100 shadow-sm border-0 project-card">
                      <img src="images/DB.jpeg" alt="React"  className="card-img-top project-image"/>
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title fw-bold text-center">  Introduction to Databases </h5>
                        <p className="card-text text-muted flex-grow-1 text-center">  Meta - Coursera </p>
                        <a href="https://drive.google.com/file/d/17EklrxuvjmOqBB8e9BJguw6Tfsrx94U5/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100 mt-3"> View </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="card h-100 shadow-sm border-0 project-card">
                      <img src="images/Full_stack.png" alt="React"  className="card-img-top project-image"/>
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title fw-bold text-center">  Full Stack Development </h5>
                        <p className="card-text text-muted flex-grow-1 text-center">  KGiSL Micro College </p>
                        <a href="https://drive.google.com/file/d/1ABs9a0bStmYa4uGZfMisYNg_AlHrbe-W/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100 mt-3"> View </a>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </section>
        </Element>
  )
}

export default Certificates