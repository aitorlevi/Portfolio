import React, { useContext, useEffect, useState } from "react";
import dataJSON from "../data/ContactData.json";
import { CurrentLanguageContext } from "../App";
import github from "../assets/other/github.svg";
import linkedin from "../assets/other/linkedin.svg";

export const Contact = () => {
  const languageContext = useContext(CurrentLanguageContext);
  const [data, setData] = useState(dataJSON.en);

  useEffect(() => {
    setData(dataJSON[languageContext.currentLanguage]);
  }, []);

  useEffect(() => {
    setData(dataJSON[languageContext.currentLanguage]);
  }, [languageContext.currentLanguage]);

  const sendMessage = (e) => {
    e.preventDefault;
    console.log(
      "NAME:",
      e.get("name"),
      "\nEMAIL:",
      e.get("email"),
      "\nMESSAGE:",
      e.get("message")
    );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>{data.title}</h2>
        <div className="data">
          <div className="info">
            {data.text.map((paragraph, index) => {
              return <p key={index}>{paragraph}</p>;
            })}
            <ul className="social">
              <li>
                <a href="https://github.com/aitorlevi" target="_blank">
                  <img src={github} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/aitor-ledesma/"
                  target="_blank"
                >
                  <img src={linkedin} />
                </a>
              </li>
            </ul>
          </div>

          <form action={sendMessage} className="form">
            <input
              type="text"
              name="name"
              placeholder={data.form.name}
              autoComplete="off"
            ></input>
            <input
              type="text"
              name="email"
              placeholder={data.form.email}
              autoComplete="off"
            ></input>
            <textarea name="message" placeholder={data.form.message}></textarea>
            <div className="submit-container">
              <button type="submit">{data.form.submit}</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
