import React, { useContext, useEffect, useState } from "react";
import github from "../assets/other/github.svg";
import linkedin from "../assets/other/linkedin.svg";
import resume from "../assets/other/resume.svg";
import mail from "../assets/other/mail.svg";
import dataJSON from "../data/HeaderData.json";
import resumePDF from "../documents/Resume_Aitor_Ledesma.pdf";
import $ from "jquery";
import { CurrentLanguageContext } from "../App";
import { NotifiactionContext } from "../App";

export const Header = () => {
  const languageContext = useContext(CurrentLanguageContext);
  const notificationContext = useContext(NotifiactionContext);
  const [data, setData] = useState(dataJSON.en);

  useEffect(() => {
    setData(dataJSON[languageContext.currentLanguage]);
  }, []);

  useEffect(() => {
    setData(dataJSON[languageContext.currentLanguage]);
  }, [languageContext.currentLanguage]);

  const scrollTo = (id) => {
    $(`#${id}`)[0].scrollIntoView({ behavior: "smooth" });
    toggleMenu();
  };

  const toggleMenu = () => {
    $(".menu-icon").toggleClass("open");
    $(".menu-container").toggleClass("active");
  };

  const copyMail = () => {
    navigator.clipboard.writeText("aitorlevi@gmail.com");
    notificationContext.setNotificationText(data.copyMail);
    notificationContext.showNotification();
  };

  return (
    <>
      <nav>
        <div className="menu-icon" onClick={() => toggleMenu()} role="button">
          <span></span>
        </div>
        <div className="menu-container">
          <div className="language-container">
            <div className="language-selector">
              <input
                type="checkbox"
                className="checkbox"
                onChange={(e) => languageContext.toggleLanguage()}
              />
              <div className="knobs">
                <span>EN</span>
              </div>
              <div className="layer"></div>
            </div>
          </div>

          <ul className="menu-content">
            <li>
              <a onClick={() => scrollTo("resume")}>{data.menu.resume}</a>
            </li>
            <li>
              <a onClick={() => scrollTo("portfolio")}>{data.menu.projects}</a>
            </li>
            <li>
              <a onClick={() => scrollTo("aboutMe")}>{data.menu.aboutMe}</a>
            </li>
            <li>
              <a onClick={() => scrollTo("contact")}>{data.menu.contact}</a>
            </li>
          </ul>
        </div>
      </nav>

      <header>
        <div className="header-container">
          <div className="presentation">
            <p>{data.hi}</p>
            <h1>
              Aitor <span className="brand-color">Le</span>desma&nbsp;
              <span className="brand-color">Vi</span>llaitodo
            </h1>
            <p>
              {data.passionate}&nbsp;
              <span className="brand-color">
                &lt;{data.developer}&nbsp;/&gt;
              </span>
              &nbsp;{data.experience}
            </p>
          </div>
          <div className="social">
            <ul className="details">
              <li>
                <a href="https://github.com/aitorlevi" target="_blank">
                  <img src={github} />
                  <span>/aitorlevi</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/aitor-ledesma/"
                  target="_blank"
                >
                  <img src={linkedin} />
                  <span>/aitor-ledesma</span>
                </a>
              </li>

              <li>
                <a onClick={() => copyMail()}>
                  <img src={mail} />
                  <span>aitorlevi@gmail.com</span>
                </a>
              </li>
              <li>
                <a href={resumePDF} target="_blank" rel="noopener noreferrer">
                  <img src={resume} />
                  <span>{data.menu.resume}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
