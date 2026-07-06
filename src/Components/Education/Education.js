import React from "react";
import { Element } from "react-scroll";

// import "../../styles/ProjectStyles.css";

function Education() {
  return (
    <Element name="education">
        <div className="container" data-aos="fade-up">
          <div className="text-center">
            <h2 className="fw-bold">Education</h2>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="card h-100 shadow-sm border-0 project-card">
                <img
                  src="/images/school.jpeg"
                  alt="LDC"
                  className="card-img-top project-image"
                />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-center">
                    B.SC COMPUTER SCIENCE
                  </h5>

                  <p className="card-text text-center text-muted flex-grow-1">
                    LADY DOAK COLLEGE, MADURAI
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <div className="card h-100 shadow-sm border-0 project-card">
                <img
                  src="/images/college.jpeg"
                  alt="LDC"
                  className="card-img-top project-image"
                />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-center">
                    FULL STACK DEVELOPMENT
                  </h5>

                  <p className="card-text text-center text-muted flex-grow-1">
                    KGISL MICRO COLLEGE, COIMBATORE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Element>
  );
}

export default Education;
