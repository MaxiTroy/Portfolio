import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h4>What I Offer</h4>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="services">
          <div className="services__head">
            <h3>Web Development</h3>
          </div>
          <ul className="services__list">
            <li>
              <BiCheck className="services__icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="services__icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="services__icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="services__icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="services__icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        <article className="services">
          <div className="services__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="services__list">
            <li>
              <BiCheck className="services__icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="services__icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="services__icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="services__icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="services__icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
