import { useContext, useEffect, useState } from "react";
import dataJSON from "../data/AboutMeData.json";
import meImage from "../assets/images/me.webp";
import { CurrentLanguageContext } from "../App";

export const AboutMe = () => {
  const languageContext = useContext(CurrentLanguageContext);
  const [data, setData] = useState(dataJSON.en);

  useEffect(() => {
    setData(dataJSON[languageContext]);
  }, [languageContext]);

  return (
    <>
      <section className="about-me-section" id="aboutMe">
        <h2>{data.title}</h2>
        <div className="about-me-container">
          <div className="bio">
            {data.text.map((paragraph, index) => {
              return <p key={index}>{paragraph}</p>;
            })}
          </div>
          <div className="bio-img">
            <img src={meImage} alt="Aitor Ledesma" />
          </div>
        </div>
      </section>
    </>
  );
};
