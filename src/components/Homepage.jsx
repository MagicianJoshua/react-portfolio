import AboutMe from "../components/AboutMe";
import ProjectCardBox from "./ProjectCardBox";
import "../styles/Homepage.css";

function Homepage() {
  return (
    <div className="Homepage">
      <AboutMe />
      <div className="ProjectContainer">
        <ProjectCardBox />
      </div>
    </div>
  );
}

export default Homepage;
