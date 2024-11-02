import React from "react";
import { READY_TO_CONNECT_MESSAGE } from "../constants";
import Skills from "./Skills";

const AboutMe: React.FC = React.memo(() => {
  return (
    <section className="px-10 lg:px-32">
      <div>
        <h3 className="div-h1">ABOUT ME</h3>
        <p className="text-center text-md text-gray-500 max-w-5xl lg:max-w-2xl mx-auto lg:text-center">
          Muhammed Althaf S is a driven and creative individual with a passion
          for transforming ideas into impactful visual narratives. As the
          co-founder of BrandBik Creatives, he plays a crucial role in guiding
          the creative direction and strategic initiatives of the company.
        </p>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-xl text-gray-500 font-bold">Get to know me!</h3>
            <p className="text-gray-600 mt-5 lg:text-lg">
              I am a speaker and a content creator. love traveling and trying
              new cuisines
            </p>
            <p className="text-gray-600 mt-5 lg:text-lg">
              {READY_TO_CONNECT_MESSAGE}
            </p>
            <a href="#contact">
              <div className="flex items-center button-style my-6 w-fit">
                <p>Contact Me</p>
              </div>
            </a>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
});
export default AboutMe;
