import skill from "../assets/skill.svg";

export const Skill = () => {
  return (
    <>
      <h1 className="text-4xl text-center font-bold pt-16 text-slate-700">Skill</h1>
      <div className="flex md:flex-row md:justify-center md:gap-x-20 md:items-center flex-col mt-14">
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
    </>
  );
};
