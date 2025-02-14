import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-[#3e6ff4] py-12 text-white text-center">
      <h1 className="text-2xl font-semibold">Robiul Haque</h1>
      <p>Web developer portfolio</p>
      <div className="flex md:justify-center justify-center gap-x-8 text-xl mt-6 text-white mb-4">
        <i>
          <a
            href="https://github.com/Robiul-Haque"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </i>
        <i>
          <a
            href="https://www.linkedin.com/in/robiul-haque-full-stack-web-developer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </i>
        <i>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <MdEmail
              onClick={() => window.open("mailto:robiulcoc420@gmail.com")}
            />
          </a>
        </i>
      </div>
      <div className="flex justify-center gap-2 items-center mb-6">
        <IoLogoWhatsapp className="text-xl" />
        <p>+88 01893187274</p>
      </div>
      <p>© Robiul Haque. All rigths reserved</p>
    </div>
  );
};

export default Footer;
