import React, { useState } from "react";
import { Technologies } from "./Technologies";

export const Portfolio = () => {
  // const testProject = {
  //   title: "AMM Instalaciones",
  //   descriptionCompany: "Página web para una empresa de reformas",
  //   technologies: [
  //     { img: html, name: "HTML5" },
  //     { img: css, name: "CSS3" },
  //     { img: js, name: "JavaScript" },
  //   ],
  //   image: "https://picsum.photos/400/250",
  // };

  // const projects = [
  //   testProject,
  //   testProject,
  //   testProject,
  //   testProject,
  //   testProject,
  // ];

  return (
    <section className="portfolio-section" id="portfolio">
      <h2>portfolio</h2>
      <h4>En mantenimiento...</h4>
      {/* <div className="projects-container">
        {projects.map((project, index) => {
          return (
            <article key={index} className="project">
              <img src={project.image} className="project-image" />
              <div className="info">
                <h4>{project.title}</h4>
                <span>{project.descriptionCompany}</span>
                <Technologies technologies={project.technologies} />
              </div>
            </article>
          );
        })}
      </div> */}
    </section>
  );
};
