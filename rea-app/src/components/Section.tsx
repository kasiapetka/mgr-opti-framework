import React, { Fragment } from "react";
import Featured from "./Featured";
import Hero from "./Hero";
import Newsletter from "./Newsletter";
import Paragraph from "./Paragraph";

type Props = {
  data: {
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
    title: string;
    type: string;
    img: string;
    text: string;
    paragraphs: string[];
  };
};

const Section = (props: Props) => {
  const { data } = props;
  switch (data.type) {
    case "hero":
      return (
        <Fragment>
          <Hero data={{ ...data, classname: "section" }} />
        </Fragment>
      );
    case "featured":
      return (
        <Fragment>
          <Featured data={{ ...data, classname: "section" }} />
        </Fragment>
      );
    case "fan":
      return (
        <Fragment>
          <Featured data={{ ...data, classname: "section" }} />
        </Fragment>
      );
    case "paragraph":
      return (
        <Fragment>
          <Paragraph data={{ ...data, classname: "section" }} />
        </Fragment>
      );
    case "newsletter":
      return (
        <Fragment>
          <Newsletter data={{ classname: "section" }} />
        </Fragment>
      );
    default:
      return (
        <div>
          <h1>Homepage</h1>
        </div>
      );
  }
};

export default Section;
