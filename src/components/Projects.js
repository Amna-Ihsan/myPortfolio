import React from "react";
import LePearle from "./Le-pearl.jpeg";
import Documentation from "./Documentation.jpeg";
import SurveyFrom from "./survey-form.jpeg";
import TextUtils from "./TextUtils.jpg";
import TributePage from "./tribute-page.jpg";

export function Projects() {
  return (
    <>
      <section id="projects">
        <h1>These are some of my projects</h1>
        <div className="project_pics">
          <a href="https://amna-ihsan.github.io/Le-Pearl/" target="_blank" className="pics">
              <img src={LePearle} alt="Le Pearl Jewellers" />
              <span className="project-title">
              <i className="fa-solid fa-angle-left"></i> Le Pearl Jewellers
              <i className="fa-solid fa-angle-right"></i>
              </span>
          </a>
          <a href="https://amna-ihsan.github.io/Technical-documentation-page-/"  target="_blank"  className="pics">
              <img src={Documentation} alt=" Technical documentation page" />
              <span className="project-title">
              <i className="fa-solid fa-angle-left"></i> Technical documentation page
              <i className="fa-solid fa-angle-right"></i>
              </span>
          </a>

          <a  href="https://amna-ihsan.github.io/Survey-form/"  target="_blank"  className="pics">
              <img src={SurveyFrom} alt="Survey Form" />
              <span className="project-title">
              <i className="fa-solid fa-angle-left"></i> Survey Form
              <i className="fa-solid fa-angle-right"></i>
              </span>
          </a>

          <a  href=" https://amna-ihsan.github.io/Tribute-page/"  target="_blank"  className="pics">
              <img src={TributePage} alt="Tribute Page" />
              <span className="project-title">
              <i className="fa-solid fa-angle-left"></i> Tribute Page
              <i className="fa-solid fa-angle-right"></i>
              </span>
          </a>
          <a  href="https://amna-ihsan.github.io/TEXTUTILS/"  target="_blank"  className="pics">
              <img src={TextUtils} alt="TextUtils" />
              <span className="project-title">
              <i className="fa-solid fa-angle-left"></i>TextUtils
              <i className="fa-solid fa-angle-right"></i>
              </span>
          </a>
        </div>

      </section>
    </>
  );
}
export default Projects;
