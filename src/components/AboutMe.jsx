import React, { useContext, useEffect, useState } from "react";
import dataJSON from "../data/AboutMeData.json";
import { CurrentLanguageContext } from "../App";

export const AboutMe = () => {
  const languageContext = useContext(CurrentLanguageContext);
  const [data, setData] = useState(dataJSON.en);

  useEffect(() => {
    setData(dataJSON[languageContext.currentLanguage]);
  }, []);

  useEffect(() => {
    setData(dataJSON[languageContext.currentLanguage]);
  }, [languageContext.currentLanguage]);

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
            <img src="../images/about-me/me.png" />
          </div>
        </div>
      </section>
    </>
  );
};
