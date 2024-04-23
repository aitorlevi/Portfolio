import React from "react";
import react from "../assets/frontEnd/react.svg";
import css from "../assets/frontEnd/css.svg";
import html from "../assets/frontEnd/html.svg";
import js from "../assets/frontEnd/js.svg";
import node from "../assets/backEnd/node.svg";
import photoshop from "../assets/design/photoshop.svg";
import scss from "../assets/frontEnd/scss.svg";
import ts from "../assets/frontEnd/ts.svg";
import jQuery from "../assets/frontEnd/jquery.svg";

export const Technologies = ({ technologies }) => {
  const selectImage = (name) => {
    switch (name) {
      case "html":
        return html;
      case "css":
        return css;
      case "react":
        return react;
      case "js":
        return js;
      case "node":
        return node;
      case "photoshop":
        return photoshop;

      default:
        break;
    }
  };
  return (
    <ul className="technologies">
      {technologies.map((technology, index) => {
        return (
          <li key={index}>
            <img src={selectImage(technology.img)} />
            {technology.name}
          </li>
        );
      })}
    </ul>
  );
};
