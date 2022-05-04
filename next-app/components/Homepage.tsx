import React from "react";
import Section from "./Section";

type Props = {
  sections: Array<{
    id: string;
    movies: Array<{
      _id: string;
      id: number;
      title: string;
      year: number;
      runtime: number;
      genres: string[];
      director: string;
      actors: string;
      plot: string;
      posterUrl: string;
    }>;
    assets: string[];
    paragraphs: string[];
    title: string;
    type: string;
    img: string;
    text: string;
  }>;
};

const Homepage = (props: Props) => {
  const { sections } = props;
  return (
    <div className="homepage">
      {sections.map((section) => (
        <Section data={section} key={section.type} />
      ))}
    </div>
  );
};

export default Homepage;
