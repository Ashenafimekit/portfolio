import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

const Contact = () => {
  return (
    <div className="flex flex-col gap-14 px-10">
      <div className="px-40">
        <h1 className="text-text_color text-2xl text-start font-bold">
          <span className="text-teal">04. </span>Contact
        </h1>
      </div>
      <div className="flex flex-col items-center xs:items-start justify-center gap-5 xs:flex-row">
        <a href="" className="hover:text-teal"><EmailIcon/> Email</a>
        <a href="" className="hover:text-teal"><GitHubIcon/> GitHub</a>
        <a href="" className="hover:text-teal"><LinkedInIcon/> LinkedIn</a>
        <a href="" className="hover:text-teal"><InstagramIcon/> Instagram</a>
        <a href="" className="hover:text-teal"><TelegramIcon/> Telegram</a>
      </div>
    </div>
  );
};

export default Contact;
