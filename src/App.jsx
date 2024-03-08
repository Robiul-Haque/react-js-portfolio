import "./App.css";
import { About } from "./component/About";
import Header from "./component/Header";
import { Project } from "./component/Project";
import { Skill } from "./component/Skill";

function App() {
  return (
    <>
      <Header />
      <About />
      <Project />
      <Skill />
    </>
  );
}

export default App;
