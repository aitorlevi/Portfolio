import React from "react";

export const Header = () => {
  return (
    <header className="header">
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
              <a href={`#resume`}>Resume</a>
            </li>
            <li>
              <a href={`#portfolio`}>Portfolio</a>
            </li>
            <li>
              <a href={`#aboutMe`}>About Me</a>
            </li>
            <li>
              <a href={`#contact`}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
