import Image from "next/image";
import React from "react";

type Props = {
  data: {
    classname: string;
    text: string;
    title: string;
    img: string;
    assets: string[];
  };
};

const Hero = (props: Props) => {
  const { classname, text, title, img, assets } = props.data;
  return (
    <section
      className={classname + " section_hero "}
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="hero_text">
        <h1>{title}</h1>
        <h2>{text}</h2>
      </div>
      <div className="hero_assets">
        {assets.map((item, index) => {
          return (
            <Image
              src={item}
              key={index}
              alt="heroassets"
              width={90}
              height={59}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
