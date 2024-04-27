import React, { useContext, useEffect, useRef, useState } from "react";
import dataJSON from "../data/ContactData.json";
import { CurrentLanguageContext } from "../App";
import { NotifiactionContext } from "../App";
import github from "../assets/other/github.svg";
import linkedin from "../assets/other/linkedin.svg";
import emailjs from "@emailjs/browser";
import $ from "jquery";

export const Contact = () => {
  const languageContext = useContext(CurrentLanguageContext);
  const notificationContext = useContext(NotifiactionContext);
  const [data, setData] = useState(dataJSON.en);
  const form = useRef();
  const submit = useRef();

  useEffect(() => {
    setData(dataJSON[languageContext]);
  }, []);

  useEffect(() => {
    setData(dataJSON[languageContext]);
  }, [languageContext]);

  const sendEmail = (e) => {
    e.preventDefault();
    $(submit.current).attr("disabled", true);
    emailjs
      .sendForm("service_i4lhr9k", "template_2fgp6e4", form.current, {
        publicKey: "g9wYisThgHuwKMggl",
      })
      .then(
        () => {
          notificationContext.setNotificationText(data.form.messageSent);
          notificationContext.showNotification();
          $(submit.current).attr("disabled", false);
        },
        (error) => {
          notificationContext.setNotificationText(error.text);
          notificationContext.showNotification();
          $(submit.current).attr("disabled", false);
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>{data.title}</h2>
        <div className="content">
          <div className="info">
            {data.text.map((paragraph, index) => {
              return <p key={index}>{paragraph}</p>;
            })}
            <ul className="social">
              <li>
                <a href="https://github.com/aitorlevi" target="_blank">
                  <img src={github} className="icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/aitor-ledesma/"
                  target="_blank"
                >
                  <img src={linkedin} className="icon" />
                </a>
              </li>
            </ul>
          </div>

          <form ref={form} onSubmit={sendEmail} className="form">
            <input
              type="text"
              name="name"
              placeholder={data.form.name}
              autoComplete="off"
              required
            ></input>
            <input
              type="email"
              name="email"
              placeholder={data.form.email}
              autoComplete="off"
              required
            ></input>
            <textarea
              name="message"
              placeholder={data.form.message}
              rows="10"
              required
            ></textarea>
            <div className="submit-container">
              <input type="submit" ref={submit} value={data.form.submit} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
