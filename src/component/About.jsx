import about_me from "../assets/about_me.svg";
import { LuMoveRight } from "react-icons/lu";

const About = () => {
  return (
    <div id="about" className="bg-slate-100 mt-4 md:py-20 py-12">
      <h1 className="text-4xl text-center font-bold text-slate-700">
        About
      </h1>
      <div className="md:flex md:justify-center md:gap-x-28 md:items-center md:mt-16 mt-12">
        <img
          src={about_me}
          alt="About me image"
          className="md:w-96 md:mb-0 md:mx-0 mb-10 w-64 mx-auto"
        />
        <div data-aos="fade-left">
          <p className="md:text-left md:w-[600px] md:text-lg text-justify mx-6 text-slate-700">
            <span className="md:text-xl text-lg font-semibold">Hi</span> there!
            I'm{" "}
            <span className="md:text-xl text-lg font-semibold gradient-text">
              Robiul Haque
            </span>
            , a Full Stack JavaScript Web Developer (MERN) based in Faridpur, Bangladesh. I love transforming ideas into functional, high-performance web applications. With expertise in React.js, Node.js, Express.js, and MongoDB, I specialize in crafting seamless user experiences and building scalable, efficient back-end systems. My keen eye for detail, commitment to writing clean, maintainable code, and enthusiasm for problem-solving drive me to stay ahead in the ever-evolving web development landscape. Whether it's designing intuitive UI/UX or optimizing server-side performance, I am always eager to learn, adapt, and push the boundaries of what's possible on the web. Let's collaborate and turn your vision into reality with responsive, high-quality applications.
          </p>
          <div className="flex md:justify-start justify-center">
            <button className="flex justify-center items-center gap-x-3 bg-gradient-to-r from-cyan-500 to-[#3e6ff4] px-6 py-3 rounded-lg text-white font-semibold text-lg md:mt-12 md:ml-6 mt-8 shadow-2xl shadow-slate-400 md:hover:translate-x-3 duration-500 ease-out">
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