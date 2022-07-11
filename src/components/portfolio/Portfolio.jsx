import "./portfolio.css";
import IMG1 from "../../assets/IMG1.jpg";
import IMG2 from "../../assets/IMG2.jpg";
import IMG3 from "../../assets/IMG3.jpg";
import IMG4 from "../../assets/IMG4.jpg";
import IMG5 from "../../assets/IMG5.jpg";
import IMG6 from "../../assets/IMG6.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h4>My Recent Work</h4>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__img">
            <img src={IMG1} alt="proyect1" />
          </div>
          <h3>Proyect Name</h3>
          <div className="portfolio__cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__img">
            <img src={IMG2} alt="proyect1" />
          </div>
          <h3>Proyect Name</h3>
          <div className="portfolio__cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__img">
            <img src={IMG3} alt="proyect1" />
          </div>
          <h3>Proyect Name</h3>
          <div className="portfolio__cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__img">
            <img src={IMG4} alt="proyect1" />
          </div>
          <h3>Proyect Name</h3>
          <div className="portfolio__cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__img">
            <img src={IMG5} alt="proyect1" />
          </div>
          <h3>Proyect Name</h3>
          <div className="portfolio__cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__img">
            <img src={IMG6} alt="proyect1" />
          </div>
          <h3>Proyect Name</h3>
          <div className="portfolio__cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
