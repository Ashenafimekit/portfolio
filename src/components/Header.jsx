import React, { useState } from "react";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../Css/underliner.css";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [changeButton, setChangeButton] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
    setChangeButton(!changeButton);
  };

  return (
    <div className="flex flex-row gap-10 items-center justify-between sm:justify-evenly px-10 sm:px-0 py-5 bg-main opacity-95 sticky top-0 z-50">
      <div className="flex flex-row">
        <h1 className="font-bold text-lg  text-gray-300 border border-teal rounded-full p-3 hover:animate-pulse">
          <Link to='hero' smooth={true} duration={500}>AM</Link>
        </h1>
      </div>
      <div
        className={`sm:flex sm:flex-row sm:gap-10 text-light_gray font-semibold ${
          openMenu
            ? "flex flex-col absolute top-2 right-16 bg-gradient-to-r from-gray-500 to-slate-700 sm:bg-none p-3 rounded-lg sm:static sm:bg-bg sm:p-0 "
            : "hidden"
        } sm:flex-row `}
      >
        <h1 className="header cursor-pointer text-sm hover:text-lighter_gray">
          <Link to="about" smooth={true} duration={500}>
            <span className="text-teal">01. </span> ABOUT
          </Link>
        </h1>
        <h1 className="header cursor-pointer text-sm hover:text-lighter_gray ">
          <Link to="project" smooth={true} duration={500}>
            <span className="text-teal">02. </span> PROJECT
          </Link>
          <span></span>
        </h1>
        <h1 className="header cursor-pointer text-sm hover:text-lighter_gray">
          <Link to="tech" smooth={true} duration={500}>
            <span className="text-teal">03. </span>SKILL
          </Link>
        </h1>

        <h1 className="header cursor-pointer text-sm hover:text-lighter_gray">
          <Link to="contact" smooth={true} duration={500}>
            <span className="text-teal">04. </span>CONTACT
          </Link>
        </h1>
      </div>
      <div className={`sm:hidden `}>
        <button
          onClick={handleMenu}
          className={`${changeButton ? "hidden" : "flex"}`}
        >
          <MenuIcon />
        </button>
        <button
          onClick={handleMenu}
          className={`${changeButton ? "flex" : "hidden"}`}
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default Header;
