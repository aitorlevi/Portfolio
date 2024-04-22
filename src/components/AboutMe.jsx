import React, { useContext, useEffect, useState } from "react";
import mir from "/images/about-me/mir.gif";
import pc from "/images/about-me/pc-master-race.jpg";
import { DeviceWidthContext } from "../App";
import $ from "jquery";

export const AboutMe = () => {
  const years = 28;

  return (
    <>
      <section className="about-me-section" id="aboutMe">
        <h2>sobre mí</h2>
        <div className="about-me-container">
          <div className="bio">
            <p>
              Hola de nuevo! Soy Aitor y tengo {years} años. Nacido y criado en
              Barcelona, España ... bueno, no exactamente en Barcelona, en&nbsp;
              Montcada i Reixac. Una pequeña ciudad de 35.000 habitantes
              dividida por ríos, vias del tren y autopistas.
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
              videojuegos, hacer deporte y leer. ¡Mi lugar favorito es sumergido
              bajo el agua!
            </p>
          </div>
          <img src="../images/about-me/me.png" />
        </div>
      </section>
    </>
  );
};
