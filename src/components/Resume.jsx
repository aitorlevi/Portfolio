import { getCompanies } from "../data/ResumeData";
import { Technologies } from "./Technologies";

export const Resume = () => {
  const showContent = (button, index) => {
    button.target.classList.toggle("active");
    var content = document.getElementById("content" + index);
    content.style.maxHeight
      ? (content.style.maxHeight = null)
      : (content.style.maxHeight = content.scrollHeight + "px");
  };

  return (
    <section className="resume-section" id="resume">
      <h2>&lt;resume&gt;</h2>
      {getCompanies().map((company, index) => {
        return (
          <article key={index} className="company">
            <button
              type="button"
              className="collapsible"
              onClick={(e) => showContent(e, index)}
            >
              {company.title}
            </button>
            <div className="content" id={`content` + index}>
              <p className="date">{company.date}</p>
              <p>{company.description}</p>
              <ul className="tasks">
                {company.tasks.map((task, index) => {
                  return (
                    <li key={index}>
                      <b>{task[0]}</b>: {task[1]}
                    </li>
                  );
                })}
              </ul>
              <Technologies technologies={company.technologies} />
            </div>
          </article>
        );
      })}
      <h2>&lt;/resume&gt;</h2>
    </section>
  );
};
