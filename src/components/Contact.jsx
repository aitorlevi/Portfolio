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

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>{data.title}</h2>
        <div className="contact-data">
          <div className="contact-information">
            {data.text.map((paragraph) => {
              return <p>{paragraph}</p>;
            })}
          </div>

          <form className="contact-form" method="post">
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
              <input type="submit" value={data.form.submit} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
