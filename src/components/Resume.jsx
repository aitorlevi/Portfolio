import React from "react";
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
import { Technologies } from "./Technologies";

export const Resume = () => {
  const testProject = {
    title: "Ogilvy",
    description: "Agencia de publicidad y marketing",
    tasks: [
      [
        "Web App Development",
        "Led the creation and upkeep of a user-friendly web application using the Oracle JET framework. Made sure the app worked well on different devices and followed industry standards.",
      ],
      [
        "Team Collaboration",
        "Worked closely with other teams, like back-end developers, project managers, and designers, to create special screens. This teamwork made our work more efficient and improved processes.",
      ],
      [
        "Testing and Fixing Issues",
        "Checked the app thoroughly, finding and fixing problems to make sure everything worked smoothly. This approach kept users happy.",
      ],
      [
        "Improving Performance",
        "Made the app faster by improving certain processes, making pages load quicker. This change increased how much users liked the app.",
      ],
    ],
    technologies: [
      { img: html, name: "HTML5" },
      { img: css, name: "CSS3" },
      { img: js, name: "JavaScript" },
    ],
    image: "https://picsum.photos/300/350",
  };
  const resume = [testProject, testProject, testProject, testProject];
  return (
    <section className="resume-section" id="resume">
      <h2>&lt;resume&gt;</h2>
      <div className="resume-container">
        {resume.map((company, index) => {
          return (
            <article key={index} className="company">
              <img src={company.image} className="resume-image" />
              <div className="company-content">
                <h3 className="title">{company.title}</h3>
                <ul className="tasks">
                  {company.tasks.map((task, index) => {
                    return (
                      <li key={index}>
                        <b>{task[0]}</b>: {task[1]}
                      </li>
                    );
                  })}
                </ul>
                <Technologies technologies={company.technologies} />
              </div>
            </article>
          );
        })}
      </div>
      <h2>&lt;/resume&gt;</h2>
    </section>
  );
};
