import React from "react";
import github from "../assets/other/github.svg";
import linkedin from "../assets/other/linkedin.svg";
import menuIcon from "../assets/menu/menu.svg";
import closeIcon from "../assets/menu/close.svg";
import $ from "jquery";

export const Header = () => {
  const scrollTo = (id) => {
    $(`#${id}`)[0].scrollIntoView({ behavior: "smooth" });
    toggleMenu();
  };

  const toggleMenu = () => {
    $(".menu-icon").toggleClass("open");
    $(".menu-content").toggleClass("active");
  };

  return (
    <>
      <nav>
        <div
          className="menu-icon"
          onClick={() => toggleMenu()}
          role="button"
        ></div>

        <ul className="menu-content">
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
              La idea de esta página es mostrarte de una manera simple y clara
              mi trayectoria y más de mi.
            </p>
          </div>
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
    </>
  );
};
