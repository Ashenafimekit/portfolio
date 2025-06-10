import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectCard from "./ProjectCard";
import TravelEase from "../assets/travelEase2.jpg";
import LensCraft from "../assets/lensCraft.jpg";
import ArabAli from "../assets/ArabAliHotel.jpg";
import VMS from "../assets/vms.jpg";

const projects = [
  {
    imgSrc: TravelEase,
    title: "TravelEase – Bus Ticket Management System",
    description:
      "A complete system for managing bus routes, bookings, and user details.",
    techStack: ["React", "Express", "MongoDB", "Tailwind"],
    githubLink: "https://github.com/Ashenafimekit/TravelEasy",
    liveLink: "https://travel-easy-lime.vercel.app/",
  },
  {
    imgSrc: LensCraft,
    title: "Lens Craft – Photography Website",
    description:
      "A modern and visually appealing portfolio website for a photography agency.",
    techStack: ["React", "Tailwind"],
    githubLink: "https://github.com/Ashenafimekit/LensCraft",
    liveLink: "https://lens-craft-ruby.vercel.app/",
  },
  {
    imgSrc: ArabAli,
    title: "Arab Ali Hotel Website and Booking Management",
    description:
      "Hotel booking, information on available services, and an integrated bed booking management system for efficient reservation handling.",
    techStack: ["React", "Express", "MongoDB", "Tailwind"],
    githubLink: "https://github.com/Ashenafimekit/AAH",
    liveLink: "https://arab-ali-hotel.vercel.app/",
  },
  {
    imgSrc: VMS,
    title: "Simple Vehicle Management Dashboard",
    description:
      "Allows users to manage vehicle data efficiently by adding, updating, deleting, and viewing vehicle information in a flexible table format.",
    techStack: ["React", "Express", "MongoDB", "Tailwind"],
    githubLink: "https://github.com/Ashenafimekit/VMS-",
    liveLink: "https://vms-five.vercel.app/",
  },
];

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  return (
    <div className="flex flex-col gap-14 py-5 z-0">
      <div>
        <h1 className="text-text_color text-2xl font-extrabold">
          <span className="text-teal">02. </span>Project
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-bottom"
            className="flex flex-col sm:flex-row gap-10 lg:gap-20 items-center justify-center"
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
