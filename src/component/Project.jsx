import mern_crud from "../assets/mern-crud.png";
import ongoing_project from "../assets/ongoing-project.png";
import dance_zone from "../assets/dance-zone.png";

const Project = () => {
  return (
    <div data-aos="fade-up" id="project" className="mt-20">
      <h1 className="text-4xl text-center font-bold text-slate-700">
        My Crative <span className="text-[#3e6ff4]">Portfolio</span>
      </h1>
      <div className="flex md:justify-center md:gap-x-10 md:gap-y-0 md:flex-row mt-20 mb-16 flex-col items-center gap-y-10">
        <div className="md:w-96 w-[92%] border rounded-md md:hover:shadow-2xl duration-500 ease-out md:hover:-translate-y-5">
          <img src={mern_crud} alt="1st project image" />
          <div className="text-center px-6 py-5">
            <h2 className="text-xl font-bold text-slate-700">Crud (MERN)</h2>
            <div className="flex justify-center gap-3 flex-wrap my-7">
              <p className="px-2 py-1 bg-slate-100 rounded text-sm">React</p>
              <p className="px-2 py-1 bg-slate-100 rounded text-sm">Redux</p>
              <p className="px-2 py-1 bg-slate-100 rounded text-sm">TypeScript</p>
              <p className="px-2 py-1 bg-slate-100 rounded text-sm">Tailwind CSS</p>
              <p className="px-2 py-1 bg-slate-100 rounded text-sm">Material UI</p>
              <p className="px-2 py-1 bg-slate-100 rounded text-sm">Mongo DB</p>
              <p className="px-2 py-1 bg-slate-100 rounded text-sm">Mongoose</p>
              <p className="px-2 py-1 bg-slate-100 rounded text-sm">Express</p>
              <p className="px-2 py-1 bg-slate-100 rounded text-sm">JWT</p>
              <p className="px-2 py-1 bg-slate-100 rounded text-sm">Cloudinary</p>
            </div>
            <div className="flex justify-center gap-2 flex-wrap my-6">
              <button className="bg-gradient-to-r from-cyan-500 to-[#3e6ff4] px-3 py-2 rounded-lg text-white font-semibold">
                <a href="https://mern-crud-123.netlify.app/sign-in" target="_blank">Live Site</a>
              </button>
              <button className="bg-gradient-to-r from-cyan-500 to-[#3e6ff4] px-3 py-2 rounded-lg text-white font-semibold">
                <a href="https://github.com/Robiul-Haque/MERN-CRUD-Redux-Ts" target="_blank">Client Repo</a>
              </button>
              <button className="bg-gradient-to-r from-cyan-500 to-[#3e6ff4] px-3 py-2 rounded-lg text-white font-semibold">
                <a href="https://github.com/Robiul-Haque/MERN-CRUD-server-with-ts-mongoose" target="_blank">Server Repo</a>
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-96 w-[92%] border rounded-md md:hover:shadow-2xl duration-500 ease-out md:hover:-translate-y-5">
          <img src={ongoing_project} alt="2nd project image" />
          <div className="text-center px-6 py-12">
            <h2 className="text-xl font-bold text-slate-700">Blog App (MERN)</h2>
            <div className="flex justify-center gap-3 flex-wrap my-7">
              <p className="px-2 py-1 bg-slate-100 rounded text-sm">TypeScript</p>
              <p className="px-2 py-1 bg-slate-100 rounded text-sm">Mongo DB</p>
              <p className="px-2 py-1 bg-slate-100 rounded text-sm">Mongoose</p>
              <p className="px-2 py-1 bg-slate-100 rounded text-sm">Express</p>
              <p className="px-2 py-1 bg-slate-100 rounded text-sm">JWT</p>
              <p className="px-2 py-1 bg-slate-100 rounded text-sm">Cloudinary</p>
            </div>
            <div className="flex justify-center gap-2 flex-wrap my-6">
              <button className="bg-gradient-to-r from-cyan-500 to-[#3e6ff4] px-3 py-2 rounded-lg text-white font-semibold">
                <a href="https://mern-crud-123.netlify.app/sign-in" target="_blank">Live Site</a>
              </button>
              {/* <button className="bg-gradient-to-r from-cyan-500 to-[#3e6ff4] px-3 py-2 rounded-lg text-white font-semibold">
                <a href="https://github.com/Robiul-Haque/MERN-CRUD-Redux-Ts" target="_blank">Client Repo</a>
              </button> */}
              <button className="bg-gradient-to-r from-cyan-500 to-[#3e6ff4] px-3 py-2 rounded-lg text-white font-semibold">
                <a href="https://github.com/Robiul-Haque/MERN-CRUD-server-with-ts-mongoose" target="_blank">Server Repo</a>
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-96 w-[92%] border rounded-md md:hover:shadow-2xl duration-500 ease-out md:hover:-translate-y-5">
          <img src={dance_zone} alt="3rd project image" />
          <div className="text-center px-6 py-8">
            <h2 className="text-xl font-bold text-slate-700">Dance Zone</h2>
            <div className="flex justify-center gap-3 flex-wrap my-7 text-slate-700">
              <p className="px-2 py-1 bg-slate-100 rounded text-sm">React</p>
              <p className="px-2 py-1 bg-slate-100 rounded text-sm">Firebase</p>
              <p className="px-2 py-1 bg-slate-100 rounded text-sm">Mongo Db</p>
              <p className="px-2 py-1 bg-slate-100 rounded text-sm">Node Js</p>
              <p className="px-2 py-1 bg-slate-100 rounded text-sm">
                Express Js
              </p>
            </div>
            <div className="flex justify-center gap-4 flex-wrap my-6">
              <button className="bg-gradient-to-r from-cyan-500 to-[#3e6ff4] px-4 py-2 rounded-lg text-white font-semibold">
                Live Site
              </button>
              <button className="bg-gradient-to-r from-cyan-500 to-[#3e6ff4] px-4 py-2 rounded-lg text-white font-semibold">
                Client Side
              </button>
              <button className="bg-gradient-to-r from-cyan-500 to-[#3e6ff4] px-4 py-2 rounded-lg text-white font-semibold">
                Live Site
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;