import { useContext, useEffect, useState } from "react";
import { CurrentLanguageContext } from "../App";
import dataJSON from "../data/ResumeData.json";
import { Technologies } from "./Technologies";
import $ from "jquery";

export const Resume = () => {
  const languageContext = useContext(CurrentLanguageContext);
  const [data, setData] = useState(dataJSON.en);

  useEffect(() => {
    setData(dataJSON[languageContext.currentLanguage]);
  }, []);

  useEffect(() => {
    setData(dataJSON[languageContext.currentLanguage]);
  }, [languageContext.currentLanguage]);

  const toggleContent = (index) => {
    $(`#collapsible${index}`).toggleClass("active");
    $(`#content${index}`).slideToggle("slow");
  };

  return (
    <section className="resume-section" id="resume">
      <h2>{data.title}</h2>
      {data.companies.map((company, index) => {
        return (
          <article key={index} className="company">
            <div
              className="collapsible"
              id={`collapsible${index}`}
              onClick={() => toggleContent(index)}
            >
              {company.title}
              <br />
              <span className="location">{company.location}</span>
              <span className="date">
                <time dateTime={company.date.start}>{company.date.start}</time>
                &nbsp;&#45;&nbsp;
                <time dateTime={company.date.end}>{company.date.end}</time>
              </span>
            </div>
            <div className="content" id={`content${index}`}>
              <p>{company.description}</p>
              <p>{company.descriptionRole}</p>
              <ul className="tasks">
                {company.tasks.map((task, index) => {
                  return (
                    <li key={index}>
                      <b>{task.title}</b>: {task.description}
                    </li>
                  );
                })}
              </ul>
              <div className="technologies-container">
                <Technologies technologies={company.technologies} />
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};
