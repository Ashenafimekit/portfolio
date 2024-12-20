import React, { useEffect } from "react";
import AOS from "aos";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Tech = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  return (
    <div className="flex flex-col gap-10 ">
      {/* Header Section */}
      <div>
        <h1 className="text-text_color text-2xl font-extrabold">
          <span className="text-teal">03. </span>Skills
        </h1>
      </div>

      {/* Skills Section */}
      <div
        data-aos="fade-bottom"
        className="flex flex-row items-start md:items-center gap-8 md:gap-14 "
      >
        {/* Vertical Divider */}
        <div className="hidden md:block w-[1px] h-auto bg-lighter_gray"></div>

        {/* Skill Columns */}
        <div className="flex flex-row  gap-1 p-5 sm:gap-8 text-lighter_gray ">
          <div className="flex flex-col sm:flex-row ">
            <div>
              <h1 className="flex items-center gap-2">
                <ArrowRightIcon sx={{ color: "#00b3a4" }} />
                WordPress
              </h1>
              <h1 className="flex items-center gap-2">
                <ArrowRightIcon sx={{ color: "#00b3a4" }} />
                React
              </h1>
              <h1 className="flex items-center gap-2">
                <ArrowRightIcon sx={{ color: "#00b3a4" }} />
                Tailwind
              </h1>
            </div>

            <div>
              <h1 className="flex items-center gap-2">
                <ArrowRightIcon sx={{ color: "#00b3a4" }} />
                Node.js
              </h1>
              <h1 className="flex items-center gap-2">
                <ArrowRightIcon sx={{ color: "#00b3a4" }} />
                Express
              </h1>
              <h1 className="flex items-center gap-2">
                <ArrowRightIcon sx={{ color: "#00b3a4" }} />
                MongoDB
              </h1>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row ">
            <div>
              <h1 className="flex items-center gap-2">
                <ArrowRightIcon sx={{ color: "#00b3a4" }} />
                C++
              </h1>
              <h1 className="flex items-center gap-2">
                <ArrowRightIcon sx={{ color: "#00b3a4" }} />
                Java
              </h1>
              <h1 className="flex items-center gap-2">
                <ArrowRightIcon sx={{ color: "#00b3a4" }} />
                JavaScript
              </h1>
              <h1 className="flex items-center gap-2">
                <ArrowRightIcon sx={{ color: "#00b3a4" }} />
                Python
              </h1>
            </div>

            <div>
              <h1 className="flex items-center gap-2">
                <ArrowRightIcon sx={{ color: "#00b3a4" }} />
                Git
              </h1>
              <h1 className="flex items-center gap-2">
                <ArrowRightIcon sx={{ color: "#00b3a4" }} />
                Figma
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
