import React from "react";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

export const Header = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <div className="header-container">
        <div className="presentation">
          <p>¡Hola! Soy</p>
          <h1>
            Aitor <span className="red-color">Le</span>desma&nbsp;
            <span className="red-color">Vi</span>llaitodo
          </h1>
          <p>
            Un apasionado&nbsp;
            <span className="red-color">&lt;programador FrontEnd /&gt;</span>
            &nbsp; con más de 5 años de experiencia.
            <br />
            La idea de esta página es mostrarte de una manera simple y clara mi
            trayectoria y más de mi.
          </p>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <a onClick={() => scrollTo("resume")}>Resume</a>
            </li>
            <li>
              <a onClick={() => scrollTo("portfolio")}>Portfolio</a>
            </li>
            <li>
              <a onClick={() => scrollTo("aboutMe")}>About Me</a>
            </li>
            <li>
              <a onClick={() => scrollTo("contact")}>Contact</a>
            </li>
          </ul>
        </nav>
        <div className="social">
          <ul>
            <li>
              <img src={github} />
            </li>
            <li>
              <img src={linkedin} />
            </li>
            <li>
              <span>aitorlevi@gmail.com</span>
            </li>
            <li>
              <span>Resume</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
