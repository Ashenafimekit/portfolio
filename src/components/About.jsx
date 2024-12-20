import React, { useEffect } from "react";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);
  return (
    <div className=" flex flex-col gap-14 px-10 ">
      <div className="">
        <h1 className="text-text_color text-2xl text-start font-extrabold">
          <span className="text-teal">01. </span>About Me
        </h1>
      </div>
      <div className="flex flex-col gap-14 justify-center items-center">
        <div
          data-aos="fade-bottom"
          className="flex flex-col items-center justify-center gap-3 text-lighter_gray  w-full "
        >
          <div className="flex flex-col lg:flex-row gap-5 ">
            <p className=" border border-teal py-10 px-5 rounded-lg text-justify shadowlg">
              Hi, I’m Ashenafi Mekit, a passionate and detail-oriented
              full-stack developer with a strong focus on crafting intuitive
              frontend interfaces and building robust backend systems. I love
              transforming ideas into functional, scalable, and user-friendly
              web applications.
            </p>
            <p className=" border border-teal py-10 px-5 rounded-lg text-justify shadow-lg">
              I specialize in using modern tools and technologies like
              <span className="text-teal">React</span> ,
              <span className="text-teal">Tailwind CSS</span>,
              <span className="text-teal">Node.js</span> , and
              <span className="text-teal"> MongoDB</span> to create seamless
              user experiences. My goal is to write clean, maintainable code and
              deliver projects that add real value.
            </p>
          </div>
          <div className="">
            <p className=" border border-teal py-10 px-5 rounded-lg text-justify shadow-lg">
              I hold a degree in Software Engineering from Addis Ababa Science
              and Technology University (AASTU), where I started my journey in
              November 2019 and graduated in July 2024. When I’m not coding, I
              enjoy exploring new technologies, solving challenges, and
              continuously improving my development skills to stay ahead in this
              ever-evolving tech world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
