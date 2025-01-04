import React, { useEffect } from "react";
import { motion } from "motion/react";
import AOS from "aos";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  const myResume = () => {
    window.open(
      "https://drive.google.com/file/d/1X6qM_jfgbl6PIp9cooUoDN4SQMMgCsdw/view?usp=sharing"
    );
  };
  return (
    <div className=" flex flex-col items-center gap-0 sm:gap-8 w-full">
      <div className="flex flex-row items-center justify-center gap-10 w-full px-10">
        <div
          data-aos="fade-right"
          className="w-full md:w-3/5 pt-10 pb-8 m flex flex-col gap-5"
        >
          <div className=""></div>
          <h1 className="text-2xl sm:text-3xl text-lighter_gray ">
            <span className="text-teal text-lg">Hi, I'm</span>{" "}
            <span className="text-text_color text-3xl sm:text-4xl md:text-6xl font-black block mb-3">
              <Typewriter
                words={["Ashenafi Mekit."]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={200}
                deleteSpeed={100}
                delaySpeed={5000}
              />
            </span>
            <span className="text-text_color text-3xl sm:text-4xl md:text-6xl font-black block">
              a Full-Stack Developer
            </span>
          </h1>
          <h2 className="text-sm xs:text-lg text-lighter_gray text-justify">
            Building dynamic, user-friendly frontend interfaces and robust
            backend systems to deliver seamless and scalable web solutions.
            Let’s turn your vision into reality with clean code and modern
            design.
          </h2>
        </div>
      </div>
      <div className="">
        <motion.button
          whileHover={{ scale: "1.01" }}
          className="border border-teal py-2 px-6 text-teal hover:border-2 text-xl rounded-md shadow-md"
          onClick={() => myResume()}
        >
          Resume
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
