import { useContext, useEffect, useState } from "react";
import { Technologies } from "./Technologies";
import dataJSON from "../data/ToolkitData.json";
import { CurrentLanguageContext } from "../App";

export const Toolkit = () => {
  const languageContext = useContext(CurrentLanguageContext);
  const [data, setData] = useState(dataJSON.en);

  useEffect(() => {
    setData(dataJSON[languageContext]);
  }, [languageContext]);
  return (
    <section className="toolkit-section">
      <h2>{data.title}</h2>
      <h3>{data.frontEnd.title}</h3>
      <div className="technologies-container">
        <Technologies technologies={data.frontEnd.techs} />
      </div>
      <h3>{data.backEnd.title}</h3>
      <div className="technologies-container">
        <Technologies technologies={data.backEnd.techs} />
      </div>
      <h3>{data.design.title}</h3>
      <div className="technologies-container">
        <Technologies technologies={data.design.techs} />
      </div>
    </section>
  );
};
