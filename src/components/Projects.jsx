import { useContext, useEffect, useState } from "react";
import $ from "jquery";
import dataJSON from "../data/ProjectsData.json";
import { CurrentLanguageContext } from "../App";
import ultima from "../assets/images/ultima.webp";
import wurth from "../assets/images/wurth.webp";
import atradius from "../assets/images/atradius.webp";
import amminstalaciones from "../assets/images/amminstalaciones.webp";
import { Technologies } from "./Technologies";

export const Projects = () => {
  const languageContext = useContext(CurrentLanguageContext);
  const [data, setData] = useState(dataJSON.en);

  useEffect(() => {
    setData(dataJSON[languageContext]);
  }, [languageContext]);

  const toggleCard = (e) => {
    console.log(e);
    $(e).toggleClass("active");
  };

  const selectImage = (name) => {
    switch (name) {
      case "ultima":
        return ultima;
      case "atradius":
        return atradius;
      case "wurth":
        return wurth;
      case "amminstalaciones":
        return amminstalaciones;
      default:
        break;
    }
  };
  return (
    <section className="projects-section">
      <h2>{data.title}</h2>
      <div className="projects-container">
        {data.projects.map((project, index) => {
          return (
            <article key={index} className="project-card">
              <div
                className="flip-card-inner"
                id={`flipCard${index}`}
                onClick={() => toggleCard(`#flipCard${index}`)}
              >
                <div className="flip-card-front">
                  <div className="image-container">
                    <img src={selectImage(project.img)} alt={project.img} />
                  </div>

                  <h3>{project.title}</h3>
                </div>
                <div className="flip-card-back">
                  <div className="info">
                    <span className="employee">
                      {project.isEmployee
                        ? `${data.employeeWork} ${project.company}`
                        : data.freelanceWork}
                    </span>
                    <p>{project.description}</p>
                  </div>
                  <div className="specifications">
                    <Technologies technologies={project.technologies} small />

                    {project.isCode ? (
                      <div className="watch-more">
                        <button
                          onClick={() => window.open(project.demo, "_blank")}
                        >
                          Demo
                        </button>
                        <button
                          onClick={() => window.open(project.code, "_blank")}
                        >
                          Código
                        </button>
                      </div>
                    ) : (
                      <p>{data.noCode}</p>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
