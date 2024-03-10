import skill from "../assets/skill.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiReactquery } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";

const Skill = () => {
  return (
    <div id="skill">
      <h1 className="text-4xl text-center font-bold pt-4 text-slate-700">
        Skill
      </h1>
      <div
        data-aos="zoom-in"
        className="flex md:flex-row md:justify-center md:gap-x-20 md:items-center flex-col mt-14"
      >
        <div>
          <img src={skill} alt="" className="md:w-96 w-80 mx-auto" />
        </div>
        <div>
          <p className="md:w-96 w-80 text-justify text-slate-700 mx-auto md:mt-0 mt-10">
            I have a strong proficiency in web development technologies,
            including HTML, CSS, and JavaScript, which enables me to create
            responsive and interactive websites and applications
          </p>
          <div className="mt-8">
            <div className="md:w-96 w-80 text-center bg-slate-100 rounded-lg md:mx-0 mx-auto">
              <div className="flex justify-between px-2 bg-gradient-to-r from-cyan-500 to-[#3e6ff4] text-white font-semibold rounded-xl w-80 text-sm">
                <p>HTML</p>
                <p>90%</p>
              </div>
            </div>
            <div className="md:w-96 w-80 text-center bg-slate-100 rounded-lg md:mx-0 mx-auto my-3">
              <div className="flex justify-between px-2 bg-gradient-to-r from-cyan-500 to-[#3e6ff4] text-white font-semibold rounded-xl w-80 text-sm">
                <p>CSS</p>
                <p>90%</p>
              </div>
            </div>
            <div className="md:w-96 w-80 text-center bg-slate-100 rounded-lg md:mx-0 mx-auto">
              <div className="flex justify-between px-2 bg-gradient-to-r from-cyan-500 to-[#3e6ff4] text-white font-semibold rounded-xl w-80 text-sm">
                <p>TAILWIND</p>
                <p>90%</p>
              </div>
            </div>
            <div className="md:w-96 w-80 text-center bg-slate-100 rounded-lg md:mx-0 mx-auto my-3">
              <div className="flex justify-between px-2 bg-gradient-to-r from-cyan-500 to-[#3e6ff4] text-white font-semibold rounded-xl w-80 text-sm">
                <p>BOOTSTRAP</p>
                <p>90%</p>
              </div>
            </div>
            <div className="md:w-96 w-80 text-center bg-slate-100 rounded-lg md:mx-0 mx-auto">
              <div className="flex justify-between px-2 bg-gradient-to-r from-cyan-500 to-[#3e6ff4] text-white font-semibold rounded-xl w-80 text-sm">
                <p>JAVASCRIPT</p>
                <p>90%</p>
              </div>
            </div>
            <div className="md:w-96 w-80 text-center bg-slate-100 rounded-lg md:mx-0 mx-auto my-3">
              <div className="flex justify-between px-2 bg-gradient-to-r from-cyan-500 to-[#3e6ff4] text-white font-semibold rounded-xl w-80 text-sm">
                <p>REACT</p>
                <p>90%</p>
              </div>
            </div>
            <div className="md:w-96 w-80 text-center bg-slate-100 rounded-lg md:mx-0 mx-auto">
              <div className="flex justify-between px-2 bg-gradient-to-r from-cyan-500 to-[#3e6ff4] text-white font-semibold rounded-xl w-80 text-sm">
                <p>EXPRESS</p>
                <p>90%</p>
              </div>
            </div>
            <div className="md:w-96 w-80 text-center bg-slate-100 rounded-lg md:mx-0 mx-auto my-3">
              <div className="flex justify-between px-2 bg-gradient-to-r from-cyan-500 to-[#3e6ff4] text-white font-semibold rounded-xl w-80 text-sm">
                <p>NODE</p>
                <p>90%</p>
              </div>
            </div>
            <div className="md:w-96 w-80 text-center bg-slate-100 rounded-lg md:mx-0 mx-auto">
              <div className="flex justify-between px-2 bg-gradient-to-r from-cyan-500 to-[#3e6ff4] text-white font-semibold rounded-xl w-80 text-sm">
                <p>MONGO DB</p>
                <p>90%</p>
              </div>
            </div>
            <div className="md:w-96 w-80 text-center bg-slate-100 rounded-lg md:mx-0 mx-auto mt-3">
              <div className="flex justify-between px-2 bg-gradient-to-r from-cyan-500 to-[#3e6ff4] text-white font-semibold rounded-xl w-80 text-sm">
                <p>NEXT</p>
                <p>90%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:block hidden w-9/12 mx-auto mt-16 px-72">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={10}
          spaceBetween={30}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <IoLogoHtml5
              title="HTML"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <IoLogoCss3
              title="CSS"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SiTailwindcss
              title="TAILWIND CSS"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
              cursor-pointer
            />
          </SwiperSlide>
          <SwiperSlide>
            <FaBootstrap
              title="BOOTSTRAP"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <RiJavascriptFill
              title="JAVASCRIPT"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FaReact
              title="REACT"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SiExpress
              title="EXPRESS JS"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FaNode
              title="NODE JS"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <DiMongodb
              title="MONGO DB"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SiNextdotjs
              title="NEXT JS"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <IoLogoFirebase
              title="FIREBASE"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SiReactquery
              title="REACT QUERY"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SiJsonwebtokens
              title="JSON WEB TOKEN"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SiFramer
              title="FRAMER"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <IoLogoFigma
              title="FIGMA"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FaGithub
              title="GITHUB"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TbBrandVscode
              title="VS CODE"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="md:hidden block  mx-auto mt-16 px-8">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={4}
          spaceBetween={30}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <IoLogoHtml5
              title="HTML"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <IoLogoCss3
              title="CSS"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SiTailwindcss
              title="TAILWIND CSS"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
              cursor-pointer
            />
          </SwiperSlide>
          <SwiperSlide>
            <FaBootstrap
              title="BOOTSTRAP"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <RiJavascriptFill
              title="JAVASCRIPT"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FaReact
              title="REACT"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SiExpress
              title="EXPRESS JS"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FaNode
              title="NODE JS"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <DiMongodb
              title="MONGO DB"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SiNextdotjs
              title="NEXT JS"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <IoLogoFirebase
              title="FIREBASE"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SiReactquery
              title="REACT QUERY"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SiJsonwebtokens
              title="JSON WEB TOKEN"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SiFramer
              title="FRAMER"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <IoLogoFigma
              title="FIGMA"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FaGithub
              title="GITHUB"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TbBrandVscode
              title="VS CODE"
              className="text-6xl mx-auto bg-slate-100 p-2 rounded-md hover:text-[#3e6ff4] transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Skill;
