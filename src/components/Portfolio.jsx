import React, { useState } from "react";
import { Technologies } from "./Technologies";
import mir from "/images/about-me/mir.gif";
import react from "../assets/react.svg";
import css from "../assets/css.svg";
import html from "../assets/html.svg";
import js from "../assets/js.svg";
import node from "../assets/node.svg";
import photoshop from "../assets/photoshop.svg";
import scss from "../assets/scss.svg";
import ts from "../assets/ts.svg";
import jQuery from "../assets/jquery.svg";

export const Portfolio = () => {
  const testProject = {
    title: "AMM Instalaciones",
    descriptionCompany: "Página web para una empresa de reformas",
    technologies: [
      { img: html, name: "HTML5" },
      { img: css, name: "CSS3" },
      { img: js, name: "JavaScript" },
    ],
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
      <h2>&lt;portfolio&gt;</h2>
      <div className="projects-container">
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
      </div>
      <h2>&lt;/portfolio&gt;</h2>
    </section>
  );
};
