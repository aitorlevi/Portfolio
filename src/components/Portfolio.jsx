import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Portfolio = () => {
  const testProject = {
    title: "AMM Instalaciones",
    descriptionCompany: "Página web para una empresa de reformas",
    technologies: ["fa-brands fa-html5", "fa-brands fa-sass"],
    image: "https://picsum.photos/400/250",
  };

  const projects = [
    testProject,
    testProject,
    testProject,
    testProject,
    testProject,
  ];

  return (
    <section className="portfolio-section" id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects-container">
        {projects.map((project, index) => {
          return (
            <article key={index} className="project">
              <img src={project.image} />
              <div className="info">
                <h4>{project.title}</h4>
                <span>{project.descriptionCompany}</span>
                <div className="tech">
                  {project.technologies.map((tech) => {
                    return (
                      <FontAwesomeIcon className="font-awesome" icon={tech} />
                    );
                  })}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
