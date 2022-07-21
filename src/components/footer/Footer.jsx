import React from "react";
import "./footer.css";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        MaxiTroy
      </a>

      <ul className="footer__permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contac">Contact</a>
        </li>
      </ul>

      <div className="footer__social">
        <a href="">
          <FaFacebookF />
        </a>
        <a href="">
          <FaGithub />
        </a>
        <a href="">
          <FaLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Maximiliano Troychuk. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
