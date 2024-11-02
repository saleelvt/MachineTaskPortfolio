/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useSpring, animated } from "@react-spring/web";
import SocialMediaIcons from "./SocialMediaIcons";
import profilePhoto from "../images/profile.jpg";
import { EMAIL, NAME, ROLE, SHORT_DESCRIPTION } from "../constants";
import "../style.css";

const Banner: React.FC<any> = React.memo(
  ({ darkModeOn }: { darkModeOn: boolean }) => {
    const fadeInAnimation = useSpring({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 1000 },
    });

    // Slide-up animation for texts
    const slideUpAnimation = useSpring({
      from: { opacity: 0, transform: "translateY(20px)" },
      to: { opacity: 1, transform: "translateY(0px)" },
      config: { duration: 800 },
      delay: 200,
    });

    // Bounce animation for the scroll indicator
    const scrollBounceAnimation = useSpring({
      from: { transform: "translateY(0px)" },
      to: { transform: "translateY(10px)" },
      config: { tension: 180, friction: 12 },
      loop: { reverse: true },
    });

    return (
      <animated.section
        style={fadeInAnimation}
        className="px-10 pb-10 lg:pb-20 lg:px-32 pt-20"
      >
        <div className="lg:grid lg:grid-cols-3">
          <animated.div
            style={slideUpAnimation}
            className="lg:col-span-2 lg:mt-20"
          >
            <h3 className="tracking-wider text-teal-600">Hello!</h3>
            <h2 className="text-xl py-3 font-bold tracking-widest">
              I&apos;m {NAME}
            </h2>
            <h3 className="text-teal-600">{ROLE}</h3>
            <p className="py-2 leading-6 text-gray-600 max-w-lg ">
              {SHORT_DESCRIPTION}
            </p>
            <p className="text-xs lg:text-sm inline-flex my-6 tracking-wide">
              Get in touch 👉
              <a
                href={`mailto:${EMAIL}`}
                className="border-b-2 border-teal-600"
              >
                {EMAIL}
              </a>
            </p>
            <div className="flex text-2xl justify-between sm:justify-start lg:gap-16 text-gray-600 lg:mb-10">
              <SocialMediaIcons />
            </div>
          </animated.div>
          <div className="flex justify-center mt-5 lg:mt-20">
            <animated.img
              src={profilePhoto}
              alt="profile photo"
              className="rounded-full hover:scale-105 border border-gray-400 shadow-2xl transition-transform duration-200 w-60 h-60 lg:w-96 lg:h-96 object-cover"
              style={{ transformOrigin: "center" }}
            />
          </div>
        </div>
        <div className="my-5 text-center hidden lg:block">
          <a href="#services">
            <animated.div
              style={scrollBounceAnimation}
              className="scroll-downs"
            >
              <div className={`mousey ${darkModeOn ? "" : "mousey-dark"}`}>
                <div
                  className={`scroller ${darkModeOn ? "" : "scroller-dark"}`}
                ></div>
              </div>
            </animated.div>
          </a>
          <p className="mt-5 text-gray-700">Scroll Down</p>
        </div>
      </animated.section>
    );
  }
);

export default Banner;
