import React from "react";
import { Element } from "react-scroll";

import "../../styles/ProjectStyles.css";
import Data from "../Projects/Project_data" // Update the path if needed

function Project() {
  return (
    <Element name="project">
      <section className="resume">
        <div className="container" data-aos="fade-up">
          <div className="text-center">
            <h2 className="fw-bold">Projects</h2>
            <p className="text-muted">
              Some of the projects I have developed.
            </p>
          </div>

          <div className="row g-4">
            {Data.map((project, index) => (
              <div className="col-lg-4 col-md-4 col-12" key={index}>
                <div className="card h-100 shadow-sm border-0 project-card">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="card-img-top project-image"
                  />

                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold text-center">
                      {project.title}
                    </h5>

                    <p className="card-text text-muted flex-grow-1">
                      {project.text}
                    </p>

                    <a
                      href={project.para2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary w-100 mt-3"
                    >
                      {project.para1}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Project;