import { useContext, useEffect, useState } from "react";
import { CurrentLanguageContext } from "../App";
import dataJSON from "../data/ResumeData.json";
import { Technologies } from "./Technologies";

export const Resume = () => {
  const languageContext = useContext(CurrentLanguageContext);
  const [data, setData] = useState(dataJSON.en);

  useEffect(() => {
    setData(dataJSON[languageContext.currentLanguage]);
  }, []);

  useEffect(() => {
    setData(dataJSON[languageContext.currentLanguage]);
  }, [languageContext.currentLanguage]);

  const showContent = (button, index) => {
    button.target.classList.toggle("active");
    var content = document.getElementById("content" + index);
    content.style.maxHeight
      ? (content.style.maxHeight = null)
      : (content.style.maxHeight = content.scrollHeight + "px");
  };

  return (
    <section className="resume-section" id="resume">
      <h2>{data.title}</h2>
      {data.companies.map((company, index) => {
        return (
          <article key={index} className="company">
            <div className="collapsible" onClick={(e) => showContent(e, index)}>
              {company.title}

              <span className="date">{company.date}</span>
            </div>
            <div className="content" id={`content` + index}>
              <p>{company.description}</p>
              <ul className="tasks">
                {company.tasks.map((task, index) => {
                  return (
                    <li key={index}>
                      <b>{task.title}</b>: {task.description}
                    </li>
                  );
                })}
              </ul>
              <Technologies technologies={company.technologies} />
            </div>
          </article>
        );
      })}
    </section>
  );
};
