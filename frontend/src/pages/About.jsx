import React from "react";
import "./about_style.css";
import {FaGithub,FaLinkedin} from "react-icons/fa";
import Navbar from "./Navbar1";

// import "https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css";
// import "https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css";

const TeamSection = () => {
  return (
    <>
    <Navbar/>
    <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Team</h2>
          <p>
            Welcome to the BrowseBytes Search Engine project team! We're on a
            mission to transform online search. Meet our talented team members
            driving the innovation behind BrowseBytes. Together, we're creating
            a powerful, user-friendly search engine to redefine how users
            discover information. Join us on this exciting journey!
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
            <div className="member d-flex align-items-start">
              <div className="pic">
                <img src="images/garima.jpg" className="img-fluid" alt="" />
              </div>
              <div className="member-info">
                <h4>Garima Upadhyay</h4>
                <span>Team Leader | Roll Number: 220001029</span>
                <p>Backend and Database Developer. Connect socially.</p>
                <div className="social">
                  <a href="https://github.com/GTG-hub">
                    <FaGithub/>
                  </a>
                  <a href="https://www.linkedin.com/in/garima-upadhyay-783450262/">
                    <FaLinkedin/>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-6 mt-4 mt-lg-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="member d-flex align-items-start">
              <div className="pic">
                <img src="images/aditi.jpg" className="img-fluid" alt="" />
              </div>
              <div className="member-info">
                <h4>Aditi Wekhande</h4>
                <span>Team Member | Roll Number: 220001003</span>
                <p>Frontend and ML models enthusiast. Stay connected.</p>
                <div className="social">
                  <a href="https://github.com/Aditi202004">
                    <FaGithub/>
                  </a>
                  <a href="https://www.linkedin.com/in/aditi-wekhande-22940a258/">
                    <FaLinkedin/>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-6 mt-4"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="member d-flex align-items-start">
              <div className="pic">
                <img src="images/misha.jpg" className="img-fluid" alt="" />
              </div>
              <div className="member-info">
                <h4>Misha Jain</h4>
                <span>Team Member | Roll Number: 220001045</span>
                <p>Frontend and ML models enthusiast. Stay connected.</p>
                <div className="social">
                  <a href="https://github.com/Mishajain1110">
                    <FaGithub/>
                  </a>
                  <a href="https://www.linkedin.com/in/misha-jain-0bb0a125b/">
                    <FaLinkedin/>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-6 mt-4"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="member d-flex align-items-start">
              <div className="pic">
                <img src="images/sanjana.jpg" className="img-fluid" alt="" />
              </div>
              <div className="member-info">
                <h4>Sai Sanjana Reddy Algubelly</h4>
                <span>Team Member | Roll Number: 220001065</span>
                <p>Backend and Database Developer. Connect socially.</p>
                <div className="social">
                  <a href="https://github.com/SanjanaReddy2005">
                    <FaGithub/>
                  </a>
                  <a href="https://www.linkedin.com/in/sai-sanjana-reddy-algubelly-1aa27b259/">
                    <FaLinkedin/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default TeamSection;