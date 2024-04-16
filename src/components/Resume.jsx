import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

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
      ["fa-brands fa-html5", "HTML5"],
      ["fa-brands fa-sass", "SASS"],
      ["fa-brands fa-react", "REACT"],
      ["fa-brands fa-html5", "HTML5"],
    ],
    image: "https://picsum.photos/300/350",
  };
  const resume = [testProject, testProject, testProject, testProject];
  return (
    <section className="resume-section" id="resume">
      <h2>Resume</h2>
      <div className="resume-container">
        {resume.map((company, index) => {
          return (
            <article key={index} className="company">
              <img src={company.image} />
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
                <ul className="techs">
                  {company.technologies.map((tech, index) => {
                    return (
                      <li key={index}>
                        <FontAwesomeIcon
                          className="font-awesome"
                          icon={tech[0]}
                        />
                        <span>{tech[1]}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
