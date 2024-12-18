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
    <div className="flex flex-col gap-10 px-6 md:px-12 lg:px-20">
      {/* Header Section */}
      <div>
        <h1 className="text-text_color text-2xl font-bold px-40">
          <span className="text-teal">03. </span>Skills
        </h1>
      </div>

      {/* Skills Section */}
      <div
        data-aos="fade-bottom"
        className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-14 pl-40"
      >
        {/* Vertical Divider */}
        <div className="hidden md:block w-[1px] h-auto bg-lighter_gray"></div>

        {/* Skill Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-lighter_gray">
          {/* Column 1 */}
          <div>
            <h1 className="flex items-center gap-2">
              <ArrowRightIcon sx={{ color: "#00b3a4" }} />
              HTML
            </h1>
            <h1 className="flex items-center gap-2">
              <ArrowRightIcon sx={{ color: "#00b3a4" }} />
              CSS
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

          {/* Column 2 */}
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

          {/* Column 3 */}
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

          {/* Column 4 */}
          <div>
            <h1 className="flex items-center gap-2">
              <ArrowRightIcon sx={{ color: "#00b3a4" }} />
              WordPress
            </h1>
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
  );
};

export default Tech;
