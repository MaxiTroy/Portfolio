import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_i5tbgzk",
      "template_ptlvlpq",
      form.current,
      "ym-xMW1b7QKGPY19V"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h4>Get In Touch</h4>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <div className="contact__option">
            <MdOutlineMail className="contact__icon" />
            <h4>Email</h4>
            <h5>maxitroyt@gmail.com</h5>
            <a href="mailto:maxitroyt@gmail.com">Send a Message</a>
          </div>
          <div className="contact__option">
            <BsLinkedin className="contact__icon" />
            <h4>LinkedIn</h4>
            <h5>Maximiliano Troychuk</h5>
            <a
              href="https://www.linkedin.com/in/maximiliano-troychuk/"
              target="blank"
            >
              Send a Message
            </a>
          </div>
          <div className="contact__option">
            <BsWhatsapp className="contact__icon" />
            <h4>Whatsapp</h4>
            <h5>+54 387 4860173</h5>
            <a href="https://wa.me/+543874860173" target="blank">
              Send a Message
            </a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
