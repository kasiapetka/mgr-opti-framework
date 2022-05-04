import React from "react";

type Props = {
  data: {
    classname: string;
    paragraphs: string[];
    title: string;
  };
};

const Paragraph = (props: Props) => {
  const { classname, paragraphs, title } = props.data;
  return (
    <section className={classname + " section_paragraph "}>
      <div className="paragraph_text">
        <h1>{title}</h1>
        {paragraphs.map((paragraph) => (
          <h2>{paragraph}</h2>
        ))}
      </div>
    </section>
  );
};

export default Paragraph;
