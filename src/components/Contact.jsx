import React, { useEffect } from "react";
import AOS from "aos";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneIcon from "@mui/icons-material/Phone";


const Contact = () => {
  useEffect(() => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        offset: 100,
      });
    }, []);
  return (
    <div className="flex flex-col gap-10 ">
      <div className="">
        <h1 className="text-text_color text-2xl text-start font-extrabold">
          <span className="text-teal ">04. </span>Contact Me
        </h1>
      </div>
      <div data-aos="fade-bottom" className="px-10 flex flex-col gap-5">
        <h1 className="font-bold text-5xl text-center text-text_color">
          Get in Touch
        </h1>
        <p className="text-lighter_gray text-center text-lg">
          Feel free to reach out with project ideas or collaboration requests.
          I’m always open to discussing exciting opportunities. Let’s create
          something amazing together!
        </p>
      </div>
      <div className="flex flex-row items-center xs:items-start justify-center gap-5 xs:flex-row text-lighter_gray">
        <div className="flex flex-col gap-2">
          <a href="" className="hover:text-teal">
            <EmailIcon /> Email
          </a>
          <a href="" className="hover:text-teal">
            <GitHubIcon /> GitHub
          </a>
          <a href="" className="hover:text-teal">
            <LinkedInIcon /> LinkedIn
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <a href="" className="hover:text-teal">
            <InstagramIcon /> Instagram
          </a>
          <a href="" className="hover:text-teal">
            <TelegramIcon /> Telegram
          </a>
          <a href="tel:+251942240594" className="hover:text-teal">
            <PhoneIcon /> +251942240594
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
