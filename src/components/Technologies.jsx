import React from "react";
import react from "../assets/frontEnd/react.svg";
import css from "../assets/frontEnd/css.svg";
import html from "../assets/frontEnd/html.svg";
import js from "../assets/frontEnd/js.svg";
import node from "../assets/backEnd/node.svg";
import mongo from "../assets/backEnd/mongo.svg";
import firebase from "../assets/backEnd/firebase.svg";
import photoshop from "../assets/design/photoshop.svg";
import figma from "../assets/design/figma.svg";
import scss from "../assets/frontEnd/scss.svg";
import ts from "../assets/frontEnd/ts.svg";
import jquery from "../assets/frontEnd/jquery.svg";

export const Technologies = ({ technologies }) => {
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
    <ul className="technologies">
      {technologies.map((technology, index) => {
        let tech = selectTech(technology);
        return (
          <li key={index}>
            <img src={tech.img} className="icon" />
            {tech.name}
          </li>
        );
      })}
    </ul>
  );
};
