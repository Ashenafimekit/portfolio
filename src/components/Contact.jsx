import React, { useEffect } from "react";
import AOS from "aos";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneIcon from "@mui/icons-material/Phone";
import { motion } from "motion/react";

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
      <div className="flex flex-row items-center xs:items-start justify-center gap-10 xs:flex-row text-lighter_gray text-lg">
        <div className="flex flex-col gap-3">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="mailto:ashumekit502@gmail.com"
            className="hover:text-teal border border-teal p-2 rounded-lg text-center"
          >
            <EmailIcon /> Email
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://github.com/Ashenafimekit"
            target="_blank"
            className="hover:text-teal border border-teal p-2 rounded-lg text-center"
          >
            <GitHubIcon /> GitHub
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://linkedin.com/in/ashenafi-mekit"
            target="_blank"
            className="hover:text-teal border border-teal p-2 rounded-lg text-center"
          >
            <LinkedInIcon /> LinkedIn
          </motion.a>
        </div>
        <div className="flex flex-col gap-3">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://www.instagram.com/ashu_mekit/"
            target="_blank"
            className="hover:text-teal border border-teal p-2 rounded-lg text-center"
          >
            <InstagramIcon /> Instagram
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://t.me/Ashe_m16"
            target="_blank"
            className="hover:text-teal border border-teal p-2 rounded-lg text-center"
          >
            <TelegramIcon /> Telegram
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="tel:+251942240594"
            className="hover:text-teal border border-teal p-2 rounded-lg text-center"
          >
            <PhoneIcon /> +251942240594
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
