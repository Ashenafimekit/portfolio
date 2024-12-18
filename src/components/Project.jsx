import React, { useEffect } from "react";
import AOS from "aos";
import placeholer from "../assets/placeholder.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import PreviewIcon from "@mui/icons-material/Preview";
import { motion } from "motion/react";
import TravelEase from "../assets/travelEase2.jpg";
import LensCraft from "../assets/lensCraft.jpg";
import ArabAli from "../assets/ArabAliHotel.jpg";
import VMS from "../assets/vms.jpg";

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);
  return (
    <div className="flex flex-col gap-14 py-5">
      <div className="">
        <h1 className="text-text_color text-2xl font-extrabold">
          <span className="text-teal">02. </span>Project
        </h1>
      </div>
      <div className="flex flex-col gap-8 justify-center items-center w-full ">
        <div
          data-aos="fade-bottom"
          className="flex flex-col sm:flex-row gap-10 lg:gap-20 items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1, scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-1 items- justify-center border border-teal rounded-lg shadow-2xl w-full xs:w-3/4 md:w-4/5 "
          >
            <div className="h-1/2 ">
              <img
                src={TravelEase}
                alt="Travelease images"
                className="rounded-t-lg"
              />
            </div>
            <div className="text-start p-3">
              <h1 className="text-sm text-teal">
                TravelEase – Bus Ticket Management System
              </h1>
              <p className="text-xs text-center text-lighter_gray">
                A complete system for managing bus routes, bookings, and user
                details.
              </p>
            </div>
            <div className="text-xs flex flex-row items-center justify-center gap-2 text-black font-semibold  ">
              <span className="bg-white rounded-lg p-1">React</span>
              <span className="bg-white rounded-lg p-1">Express</span>
              <span className="bg-white rounded-lg p-1">MonogDB</span>
              <span className="bg-white rounded-lg p-1">Tailwind css</span>
            </div>
            <div className="text-center flex flex-row gap-3 items-center justify-center py-3">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/Ashenafimekit/TravelEasy"
                target="_blank"
                className="hover:text-teal"
              >
                <GitHubIcon />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://travel-easy-lime.vercel.app/"
                target="_blank"
                className="hover:text-teal"
              >
                <PreviewIcon />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1, scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-1 items- justify-center border border-teal rounded-lg shadow-2xl w-full xs:w-3/4 md:w-4/5 "
          >
            <div className="h-1/2 ">
              <img
                src={LensCraft}
                alt="Travelease images"
                className="rounded-t-lg"
              />
            </div>
            <div className="text-start p-3">
              <h1 className="text-sm text-teal">
                Lens Craft – photography website
              </h1>
              <p className="text-xs text-center text-lighter_gray">
                A modern and visually appealing portfolio website for a
                photography agency
              </p>
            </div>
            <div className="text-xs flex flex-row items-center justify-center gap-2 text-black font-semibold  ">
              <span className="bg-white rounded-lg p-1">React</span>
              {/* <span className="bg-white rounded-lg p-1">Express</span>
              <span className="bg-white rounded-lg p-1">MonogDB</span> */}
              <span className="bg-white rounded-lg p-1">Tailwind css</span>
            </div>
            <div className="text-center flex flex-row gap-3 items-center justify-center py-3">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/Ashenafimekit/LensCraft"
                target="_blank"
                className="hover:text-teal"
              >
                <GitHubIcon />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://lens-craft-ruby.vercel.app/"
                target="_blank"
                className="hover:text-teal"
              >
                <PreviewIcon />
              </motion.a>
            </div>
          </motion.div>
        </div>
        <div
          data-aos="fade-bottom"
          className="flex flex-col sm:flex-row gap-20 items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1, scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-1 items- justify-center border border-teal rounded-lg shadow-2xl w-full xs:w-3/4 md:w-4/5 "
          >
            <div className="h-1/2 ">
              <img
                src={ArabAli}
                alt="Travelease images"
                className="rounded-t-lg"
              />
            </div>
            <div className="text-start p-3">
              <h1 className="text-sm text-teal">
                Arab Ali Hotel Website And Booking Management
              </h1>
              <p className="text-xs text-center text-lighter_gray">
                Hotel booking, information on available services, and an
                integrated bed booking management system for efficient
                reservation handling.
              </p>
            </div>
            <div className="text-xs flex flex-row items-center justify-center gap-2 text-black font-semibold  ">
              <span className="bg-white rounded-lg p-1">React</span>
              <span className="bg-white rounded-lg p-1">Express</span>
              <span className="bg-white rounded-lg p-1">MonogDB</span>
              <span className="bg-white rounded-lg p-1">Tailwind css</span>
            </div>
            <div className="text-center flex flex-row gap-3 items-center justify-center py-3">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/Ashenafimekit/AAH"
                target="_blank"
                className="hover:text-teal"
              >
                <GitHubIcon />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="hover:text-teal"
              >
                <PreviewIcon />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1, scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-1 items- justify-center border border-teal rounded-lg shadow-2xl w-full xs:w-3/4 md:w-4/5 "
          >
            <div className="h-1/2 ">
              <img src={VMS} alt="Travelease images" className="rounded-t-lg" />
            </div>
            <div className="text-start p-3">
              <h1 className="text-sm text-teal">
                Simple Vehicle Management Dashboard
              </h1>
              <p className="text-xs text-center text-lighter_gray">
                Allows users to manage vehicle data efficiently by adding,
                updating, deleting, and viewing vehicle information in a
                flexible table format.
              </p>
            </div>
            <div className="text-xs flex flex-row items-center justify-center gap-2 text-black font-semibold  ">
              <span className="bg-white rounded-lg p-1">React</span>
              <span className="bg-white rounded-lg p-1">Express</span>
              <span className="bg-white rounded-lg p-1">MonogDB</span>
              <span className="bg-white rounded-lg p-1">Tailwind css</span>
            </div>
            <div className="text-center flex flex-row gap-3 items-center justify-center py-3">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/Ashenafimekit/VMS-"
                target="_blank"
                className="hover:text-teal"
              >
                <GitHubIcon />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://vms-five.vercel.app/"
                target="_blank"
                className="hover:text-teal"
              >
                <PreviewIcon />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Project;
