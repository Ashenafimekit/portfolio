import React, { useEffect } from "react";
import AOS from "aos";
import placeholer from "../assets/placeholder.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import PreviewIcon from "@mui/icons-material/Preview";


const Project = () => {
  useEffect(() => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        offset: 100,
      });
    }, []);
  return (
    <div  className="flex flex-col gap-14 py-5">
      <div className="">
        <h1 className="text-text_color text-2xl font-extrabold">
          <span className="text-teal">02. </span>Project
        </h1>
      </div>
      <div className="flex flex-col gap-8 justify-center items-center w-full ">
        <div data-aos='fade-bottom' className="flex flex-col sm:flex-row gap-10 lg:gap-20 items-center justify-center">
          <div className="flex flex-col gap-1 items- justify-center border border-teal rounded-lg shadow-2xl w-full xs:w-3/4 md:w-4/5 ">
            <div className="h-1/2 ">
              <img
                src={placeholer}
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
              <a href="#" className="">
                <GitHubIcon />
              </a>
              <a href="#" className="">
                <PreviewIcon />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-1 items- justify-center border border-teal rounded-lg shadow-2xl w-full xs:w-3/4 md:w-4/5 ">
            <div className="h-1/2 ">
              <img
                src={placeholer}
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
              <a href="#" className="">
                <GitHubIcon />
              </a>
              <a href="#" className="">
                <PreviewIcon />
              </a>
            </div>
          </div>
        </div>
        <div data-aos='fade-bottom' className="flex flex-col sm:flex-row gap-20 items-center justify-center">
        <div className="flex flex-col gap-1 items- justify-center border border-teal rounded-lg shadow-2xl w-full xs:w-3/4 md:w-4/5 ">
          <div className="h-1/2 ">
            <img
              src={placeholer}
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
            <a href="#" className=""><GitHubIcon/></a>
            <a href="#" className=""><PreviewIcon/></a>
          </div>
        </div>

        <div className="flex flex-col gap-1 items- justify-center border border-teal rounded-lg shadow-2xl w-full xs:w-3/4 md:w-4/5 ">
          <div className="h-1/2 ">
            <img
              src={placeholer}
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
            <a href="#" className=""><GitHubIcon/></a>
            <a href="#" className=""><PreviewIcon/></a>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Project;
