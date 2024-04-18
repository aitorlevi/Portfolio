import React from "react";
import { Technologies } from "./Technologies";
import react from "../assets/frontEnd/react.svg";
import css from "../assets/frontEnd/css.svg";
import html from "../assets/frontEnd/html.svg";
import js from "../assets/frontEnd/js.svg";
import node from "../assets/backEnd/node.svg";
import photoshop from "../assets/design/photoshop.svg";
import scss from "../assets/frontEnd/scss.svg";
import ts from "../assets/frontEnd/ts.svg";
import jQuery from "../assets/frontEnd/jquery.svg";
import jira from "../assets/other/jira.svg";
import github from "../assets/other/github.svg";
import figma from "../assets/design/figma.svg";
import mongo from "../assets/backEnd/mongo.svg";
import firebase from "../assets/backEnd/firebase.svg";

export const Toolkit = () => {
  const frontEndTech = [
    { img: html, name: "HTML5" },
    { img: css, name: "CSS3" },
    { img: js, name: "JavaScript" },
    { img: jQuery, name: "jQuery" },
    { img: scss, name: "SCSS" },
    { img: ts, name: "TypeScript" },

    { img: react, name: "React" },
  ];
  const backEndTech = [
    { img: node, name: "Node JS" },
    { img: mongo, name: "Mongo DB" },
    { img: firebase, name: "Firebase" },
  ];
  const designTech = [
    { img: photoshop, name: "Photoshop" },
    { img: figma, name: "Figma" },
  ];
  const otherTech = [
    { img: jira, name: "Jira" },
    { img: github, name: "GitHub" },
  ];
  return (
    <section className="toolkit-section">
      <h2>&lt;herramientas que utilizo&gt;</h2>
      <p>Puedes ver un poco de las herramientas que uso para mi trabajo</p>
      <h3>Front End</h3>
      <div className="technologies-container">
        <Technologies technologies={frontEndTech} />
      </div>
      <h3>Back End</h3>
      <Technologies technologies={backEndTech} />
      <h3>Diseño</h3>
      <Technologies technologies={designTech} />
      {/* <h3>Otros</h3>
      <Technologies technologies={otherTech} /> */}
      <h2>&lt;/herramientas que utilizo&gt;</h2>
    </section>
  );
};
