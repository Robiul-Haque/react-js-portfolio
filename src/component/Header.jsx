import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import Robiul_Haque from "../assets/Robiul_Haque.png";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { GoDownload } from "react-icons/go";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    setToggleMenu(false);
  }, []);

  const handleOpenIcon = () => {
    setToggleMenu(true);
  };

  const handleCloseIcon = () => {
    setToggleMenu(false);
  };

  return (
    <>
      <header className="">
        {/* desktop nav */}
        <nav className="lg:flex md:flex hidden justify-around items-center py-6 border shadow-lg sticky top-0 z-50 bg-white">
          <h1 className="text-xl font-semibold">Robiul Haque</h1>
          <ul className="flex md:gap-x-10 font-semibold">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skill</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        {/* mobile nav */}
        <div className="lg:hidden md:hidden border shadow-md">
          <nav className="flex justify-between items-center px-6 text-black py-6">
            <h1 className="text-xl font-semibold">Robiul Haque</h1>
            <div>
              <i>
                {toggleMenu === false ? (
                  <>
                    <HiMenu onClick={handleOpenIcon} className="text-xl" />
                  </>
                ) : (
                  <>
                    <IoClose onClick={handleCloseIcon} className="text-xl" />
                  </>
                )}
              </i>
            </div>
          </nav>
          {toggleMenu && (
            <ul
              onClick={handleCloseIcon}
              className="flex flex-col gap-y-5 font-semibold text-center rounded-md absolute left-5 top-[85px] z-50 bg-white opacity-95 w-80 py-6"
            >
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Skill</a>
              </li>
              <li>
                <a href="#">Project</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          )}
        </div>

        {/* hero section */}
        <div className="md:flex md:justify-center md:gap-x-6 md:items-center md:mt-[-120px]">
          <div className="md:ml-10 md:text-left text-center md:mt-32 mt-10">
            <h1 className="md:text-6xl font-bold text-3xl text-slate-700">Hi,</h1>
            <h1 className="md:text-6xl font-bold text-3xl md:my-6 my-2 text-slate-700">
              I'am <span className="gradient-text">ROBIUL HAQUE</span>
            </h1>
            <h1 className="md:text-6xl font-bold text-3xl text-slate-700">
              Software Engineer
            </h1>
            <button className="flex justify-center gap-x-3 items-center bg-gradient-to-r from-cyan-500 to-[#3e6ff4] px-6 py-4 rounded-lg text-white font-semibold text-lg md:mt-12 mt-8 md:mx-0 mx-auto">
              Downlode CV
              <GoDownload className="text-2xl" />
            </button>
            <div className="flex md:justify-start justify-center gap-x-8 text-xl mt-10 text-[#3e6ff4] ">
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
                  href="https://www.linkedin.com/in/robiul-haque-frontend-developer/"
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
              <i>
                <a
                  href="tel:+8801893187274"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdLocalPhone />
                </a>
              </i>
            </div>
          </div>
          <div className="bg-cover md:w-[600px] md:h-[800px] bg-[url('./assets/bg-hero.svg')] relative w-[360px] h-[400px] md:mt-0 mt-[-80px]">
            <img
              src={Robiul_Haque}
              alt="Robiul Haque image"
              className="md:w-72 md:h-80 rounded-full absolute md:top-[290px] md:left-[215px] w-40 h-40 top-[145px] left-[98px]"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
