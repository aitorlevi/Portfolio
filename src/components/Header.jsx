import { useContext, useEffect, useState } from "react";
import github from "../assets/icons/other/github.svg";
import linkedin from "../assets/icons/other/linkedin.svg";
import resume from "../assets/icons/other/resume.svg";
import mail from "../assets/icons/other/mail.svg";
import dataJSON from "../data/HeaderData.json";
import resumePDF from "../assets/documents/Resume_Aitor_Ledesma.pdf";
import { CurrentLanguageContext } from "../App";
import { NotificationContext } from "../App";

export const Header = () => {
  const languageContext = useContext(CurrentLanguageContext);
  const notificationContext = useContext(NotificationContext);
  const [data, setData] = useState(dataJSON.en);

  useEffect(() => {
    setData(dataJSON[languageContext]);
  }, [languageContext]);

  const copyMail = () => {
    navigator.clipboard.writeText("aitorlevi@gmail.com");
    notificationContext.setNotificationText(data.copyMail);
    notificationContext.showNotification();
  };

  return (
    <>
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
                <a
                  href="https://github.com/aitorlevi"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <img src={github} className="icon" alt="GitHub" />
                  <span>/aitorlevi</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/aitor-ledesma/"
                  target="_blank"
                >
                  <img
                    src={linkedin}
                    className="icon"
                    alt="Linkedin"
                    aria-label="Linkedin"
                  />
                  <span>/aitor-ledesma</span>
                </a>
              </li>
              <li>
                <div onClick={() => copyMail()}>
                  <img src={mail} className="icon" alt="Mail" />
                  <span>aitorlevi@gmail.com</span>
                </div>
              </li>
              <li>
                <a
                  href={resumePDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Resume"
                >
                  <img src={resume} className="icon" alt="Resume" />
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
