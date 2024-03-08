import about_me from "../assets/about_me.svg";
import { LuMoveRight } from "react-icons/lu";

const About = () => {
  return (
    <div className="bg-slate-100 mt-4 md:py-20 py-12">
      <h1 className="text-4xl text-center font-bold text-slate-700">
        About
      </h1>
      <div className="md:flex md:justify-center md:gap-x-28 md:items-center md:mt-16 mt-12">
        <img
          src={about_me}
          alt="About me image"
          className="md:w-96 md:mb-0 md:mx-0 mb-10 w-64 mx-auto"
        />
        <div>
          <p className="md:text-left md:w-[600px] md:text-lg text-justify mx-6 text-slate-700">
            <span className="md:text-xl text-lg font-semibold">Hi</span> there!
            I'm{" "}
            <span className="md:text-xl text-lg font-semibold gradient-text">
              Robiul Haque
            </span>
            , a passionate front-end (React Js) web developer based in Faridpur,
            Bangladesh. I thrive on crafting elegant solutions to complex
            problems. With a keen eye for detail and a dedication to clean,
            efficient code, I specialize in building intuitive user interfaces
            that captivate and delight. My relentless pursuit of excellence
            drives me to continuously expand my skill set and stay ahead of the
            curve in the ever-evolving world of web development. Let's
            collaborate and bring your ideas to life with seamless functionality
            and stunning responsive design.
          </p>
          <div className="flex md:justify-start justify-center">
            <button className="flex justify-center items-center gap-x-3 bg-gradient-to-r from-cyan-500 to-[#3e6ff4] px-9 py-3 rounded-lg text-white font-semibold text-lg md:mt-12 md:ml-6 mt-8">
              Contact
              <LuMoveRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;