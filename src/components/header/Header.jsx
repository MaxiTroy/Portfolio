import React from "react";
import "./header.css";
import Me from "../../assets/maxi.png";
import { BsGithub, BsFacebook, BsLinkedin } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Troychuk Maximiliano</h1>
        <h3>Front-End Developer</h3>

        <div className="cta">
          <a className="btn">Donwload CV</a>
          <a className="btn btn-primary">Let's Talk</a>
        </div>

        <div className="social_media">
          <a href="https://linkedin.com" target="_blank">
            <BsLinkedin />
          </a>
          <a href="https://github.com" target="_blank">
            <BsGithub />
          </a>
          <a href="https://facebook.com" target="_blank">
            <BsFacebook />
          </a>
        </div>

        <div className="my_image">
          <img src={Me} alt="FrontEnd Developer Troychuk Maximiliano" />
        </div>

        <a className="scroll_down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
