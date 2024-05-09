import react from "../assets/icons/frontEnd/react.svg";
import css from "../assets/icons/frontEnd/css.svg";
import html from "../assets/icons/frontEnd/html.svg";
import js from "../assets/icons/frontEnd/js.svg";
import node from "../assets/icons/backEnd/node.svg";
import mongo from "../assets/icons/backEnd/mongo.svg";
import firebase from "../assets/icons/backEnd/firebase.svg";
import photoshop from "../assets/icons/design/photoshop.svg";
import figma from "../assets/icons/design/figma.svg";
import scss from "../assets/icons/frontEnd/scss.svg";
import ts from "../assets/icons/frontEnd/ts.svg";
import jquery from "../assets/icons/frontEnd/jquery.svg";
import oraclejet from "../assets/icons/frontEnd/oraclejet.svg";

export const Technologies = ({ technologies, small = false }) => {
  const selectTech = (name) => {
    switch (name) {
      case "html":
        return { img: html, name: "HTML5" };
      case "css":
        return { img: css, name: "CSS3" };
      case "js":
        return { img: js, name: "JavaScript" };
      case "jquery":
        return { img: jquery, name: "jQuery" };
      case "scss":
        return { img: scss, name: "Sass" };
      case "ts":
        return { img: ts, name: "TypeScript" };
      case "react":
        return { img: react, name: "React" };
      case "oraclejet":
        return { img: oraclejet, name: "Oracle JET" };
      case "node":
        return { img: node, name: "Node.js" };
      case "mongo":
        return { img: mongo, name: "MongoDB" };
      case "firebase":
        return { img: firebase, name: "Firebase" };
      case "ps":
        return { img: photoshop, name: "Photoshop" };
      case "figma":
        return { img: figma, name: "Figma" };
      default:
        break;
    }
  };

  return (
    <ul className={small ? "technologies small" : "technologies"}>
      {technologies.map((technology, index) => {
        let tech = selectTech(technology);
        return (
          <li key={index}>
            <img
              src={tech.img}
              className="icon"
              alt={`${tech.name} technology`}
            />
            {tech.name}
          </li>
        );
      })}
    </ul>
  );
};
