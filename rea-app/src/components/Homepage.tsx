import React, { useEffect, useState } from "react";
import api from "../api/api-service";
import Section from "./Section";

type Props = {};

const Homepage = (props: Props) => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    api.get("/sections").then((res) => setSections(res));
  }, []);

  return (
    <div className="homepage">
      {sections.map((section, index) => {
        return <Section data={section} key={index} />;
      })}
    </div>
  );
};

export default Homepage;
