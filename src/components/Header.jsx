import React, { useEffect, useState } from "react";
import github from "../assets/other/github.svg";
import linkedin from "../assets/other/linkedin.svg";
import resume from "../assets/other/resume.svg";
import mail from "../assets/other/mail.svg";
import open from "../assets/other/open.svg";
import copy from "../assets/other/copy.svg";
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

  const copyMail = () => {
    navigator.clipboard.writeText("aitorlevi@gmail.com");
    $(".popup-mail").toggleClass("show");
    const timer = setTimeout(() => {
      $(".popup-mail").toggleClass("show");
    }, 3000);
    return () => clearTimeout(timer);
  };

  const openResume = () => {
    alert("Open resume");
  };

  const goTo = (url) => {
    window.open(url);
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
              Aitor <span className="brand-color">Le</span>desma&nbsp;
              <span className="brand-color">Vi</span>llaitodo
            </h1>
            <p>
              Un apasionado&nbsp;
              <span className="brand-color">
                &lt;programador FrontEnd /&gt;
              </span>
              &nbsp; con más de 5 años de experiencia.
              <br />
              La idea de esta página es mostrarte de una manera simple y clara
              mi trayectoria y más de mi.
            </p>
          </div>
          <div className="social">
            <div className="popup-mail">
              <div className="modal">¡Mail copiado en el portapapeles!</div>
            </div>
            <p>Algunos detalles:</p>
            <ul>
              <li onClick={() => goTo("https://github.com/aitorlevi")}>
                <img src={github} />
                <span>/aitorlevi</span>
              </li>
              <li
                onClick={() =>
                  goTo("https://www.linkedin.com/in/aitor-ledesma/")
                }
              >
                <img src={linkedin} />
                <span>/aitor-ledesma</span>
              </li>

              <li onClick={() => copyMail()}>
                <img src={mail} />
                <span>aitorlevi@gmail.com</span>
              </li>
              <li onClick={() => openResume()}>
                <img src={resume} />
                <span>Resume</span>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
