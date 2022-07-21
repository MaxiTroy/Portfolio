import React from "react";
import "./about.css";
import Me from "../../assets/maxi.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h4>Get To Know</h4>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__img">
            <img src={Me} alt="Maxi developer" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h4>Experience</h4>
              <small>1 Year Working</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h4>Projects</h4>
              <small>5+ Completed Projects</small>
            </article>
          </div>
          <p>
            I am a developer with 1 year of experience building web apps using
            React and mobile apps using React native, focused on writing code
            and solving tasks efficiently. I have been working on several
            projects. I am always willing to learn new technologies and get new
            challenges.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
