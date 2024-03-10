import { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "react-scroll-to-top";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Project from "./component/Project";
import Skill from "./component/Skill";
import { ToastContainer } from "react-toastify";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1400 });
  }, []);

  return (
    <>
      <ScrollToTop smooth width={40} height={22} color="#3e6ff4" />
      <Header />
      <About />
      <Project />
      <Skill />
      <Contact />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
