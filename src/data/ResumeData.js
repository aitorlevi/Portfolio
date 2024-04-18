import react from "../assets/frontEnd/react.svg";
import css from "../assets/frontEnd/css.svg";
import html from "../assets/frontEnd/html.svg";
import js from "../assets/frontEnd/js.svg";
import node from "../assets/backEnd/node.svg";
import photoshop from "../assets/design/photoshop.svg";
import scss from "../assets/frontEnd/scss.svg";
import ts from "../assets/frontEnd/ts.svg";
import jQuery from "../assets/frontEnd/jquery.svg";

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
