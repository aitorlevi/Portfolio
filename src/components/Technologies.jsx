import React from "react";

export const Technologies = ({ technologies }) => {
  return (
    <ul className="technologies">
      {technologies.map((technology, index) => {
        return (
          <li key={index}>
            <img src={technology.img} />
            {technology.name}
          </li>
        );
      })}
    </ul>
  );
};
