import React from 'react'
import { Element } from 'react-scroll'

import "../../styles/EducationStyles.css"

function Education() {
    return (
        <Element>
            <div className="resume">
                <div className="container" data-aos="fade-up">
                    <h2>Education</h2>
                   <div className="row">
                        <div className="col-lg-6">
                            <div className="card border-0 mt-5">
                                <img src="/images/school.jpeg" className='rounded-5' alt="bg-img" />
                                <div className="card-body p-5">
                                    <h1 className="card-title">B.SC COMPUTER SCIENCE</h1>
                                    <p className="card-text" >Lady Doak College, Madurai</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="card mt-5 border-0">
                                <img src="/images/college.jpeg" className='rounded-5' alt="bg-img"/>
                                <div className="card-body p-5">
                                    <h1 className="card-title h1">FULL STACK DEVELOPER</h1>
                                    <p className="card-text p">KGiSL Micro College, Coimbatore</p>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>

               
            </div>

        </Element>
    )
}

export default Education