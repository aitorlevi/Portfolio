import React, { useContext, useEffect, useState } from "react";
import { Technologies } from "./Technologies";
import dataJSON from "../data/ToolkitData.json";
import { CurrentLanguageContext } from "../App";

export const Toolkit = () => {
  const languageContext = useContext(CurrentLanguageContext);
  const [data, setData] = useState(dataJSON.en);

  useEffect(() => {
    setData(dataJSON[languageContext.currentLanguage]);
  }, []);

  useEffect(() => {
    setData(dataJSON[languageContext.currentLanguage]);
  }, [languageContext.currentLanguage]);
  return (
    <section className="toolkit-section">
      <h2>{data.title}</h2>
      <h4>{data.frontEnd.title}</h4>
      <div className="technologies-container">
        <Technologies technologies={data.frontEnd.techs} />
      </div>
      <h4>{data.backEnd.title}</h4>
      <div className="technologies-container">
        <Technologies technologies={data.backEnd.techs} />
      </div>
      <h4>{data.design.title}</h4>
      <div className="technologies-container">
        <Technologies technologies={data.design.techs} />
      </div>
    </section>
  );
};
