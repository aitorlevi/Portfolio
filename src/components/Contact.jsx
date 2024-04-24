import React, { useContext, useEffect, useState } from "react";
import dataJSON from "../data/ContactData.json";
import { CurrentLanguageContext } from "../App";

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
        <div className="contact-data">
          <div className="contact-information">
            {data.text.map((paragraph, index) => {
              return <p key={index}>{paragraph}</p>;
            })}
          </div>

          <form action={sendMessage} className="contact-form">
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
