import React from "react";

export const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>Contact</h2>
        <div className="contact-data">
          <div className="contact-information">
            <p>
              Si quieres contactarme o charlar puedes encontrarme en estas redes
              sociales, ¡o enviarme un mensaje por aquí!
            </p>
            <p>¡Muchas gracias!</p>
          </div>

          <form className="contact-form" method="post">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              autoComplete="off"
            ></input>
            <input
              type="text"
              name="email"
              placeholder="Email"
              autoComplete="off"
            ></input>
            <textarea name="message" placeholder="Mensaje"></textarea>
            <div className="submit-container">
              <input type="submit" value="Enviar" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
