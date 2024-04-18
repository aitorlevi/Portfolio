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

const companies = [
  {
    title: "Ogilvy",
    description: "Agencia de publicidad y marketing",
    date: "2020 - 2024",
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
  },
];

export const getCompanies = () => {
  return companies;
};
