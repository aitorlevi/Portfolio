import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import mir from "/images/about-me/mir.gif";

export const AboutMe = () => {
  const years = 28;

  const showImage = (id, e) => {
    console.log(e);
    var img = document.getElementById(id);
    img.style.top = e.clientY - 200 + "px";
    img.style.left = e.clientX - 600 + "px";
  };

  // useEffect(() => {
  //   const images = document.querySelectorAll(".images-hover");
  //   images.forEach((img) => {
  //     window.onmousemove = function (e) {
  //       let x = e.clientX - 520 + "px",
  //         y = e.clientY - 150 + "px";
  //       img.style.top = y;
  //       img.style.left = x;
  //     };
  //   });
  // });
  return (
    <>
      <section className="about-me-section" id="aboutMe">
        <h2>Sobre mí</h2>
        <div className="about-me-container">
          <div className="bio">
            <p>
              Hola de nuevo! Soy Aitor y tengo {years} años. Nacido y criado en
              Barcelona, España ... bueno, no exactamente en Barcelona, en&nbsp;
              <span
                className="images-hover"
                onPointerEnter={(e) => showImage("mir", e)}
              >
                Montcada i Reixac
                <img src={mir} id="mir" />
              </span>
              . Una pequeña ciudad de 35.000 habitantes dividida por ríos, vias
              del tren y autopistas.
            </p>
            <p>
              Graduado en los ciclos de grado superior ASIX (Administración de
              Sistemas y Redes o ASIR) y DAM (Desarrollo de Aplicaciones
              Multiplataforma) en INS La Ferreria cursando el grado superior de
              ASIR (Administración de Sistemas y Redes o ASIX en Cataluña). Y
              actualmente cursando la carrera de Ingenieria Informática en la
              UOC.
            </p>
            <p>
              En mi tiempo libre, entre otras cosas me gusta jugar a&nbsp;
              <span
                className="images-hover"
                onPointerEnter={(e) => showImage("pcMaster", e)}
              >
                videojuegos
                <img
                  src="../images/about-me/pc-master-race.jpg"
                  id="pcMaster"
                />
              </span>
              , hacer deporte y leer. ¡Mi lugar favorito es sumergido bajo el
              agua!
            </p>
          </div>
          <div className="image">
            <img src="../images/about-me/me.png" />
          </div>
        </div>
      </section>
      <section className="toolkit-section">
        <h2>Herramientas que utilizo</h2>
        <p>Puedes ver un poco de las herramientas que uso para mi trabajo</p>
        <ul className="technology">
          <li>
            <FontAwesomeIcon icon="fa-brands fa-html5" />
          </li>
          <li>
            <FontAwesomeIcon icon="fa-brands fa-css3" />
          </li>
          <li>
            <FontAwesomeIcon icon="fa-brands fa-js" />
          </li>
          <li>
            <FontAwesomeIcon icon="fa-brands fa-node" />
          </li>
          <li>
            <FontAwesomeIcon icon="fa-brands fa-react" />
          </li>
          <li>
            <FontAwesomeIcon icon="fa-brands fa-sass" />
          </li>
        </ul>
      </section>
    </>
  );
};