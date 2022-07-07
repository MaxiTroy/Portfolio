import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h4>What's Skill I Have</h4>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-End Development</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__detail">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>CSS</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__detail">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>Javascript</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__detail">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>React</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__detail">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>Tailwind</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience__detail">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>NextJs</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience__detail">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>Git</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
