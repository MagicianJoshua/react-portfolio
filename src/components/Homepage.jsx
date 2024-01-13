import AboutMe from "./AboutMe";
import ProjectCardBox from "./ProjectCardBox";
import "../styles/Homepage.css";
import ContactMe from "./ContactMe";

function Homepage() {
  return (
    <div className="Homepage">
      <AboutMe />
      <div className="ProjectContainer">
        <ProjectCardBox />
      </div>
      <ContactMe />
    </div>
  );
}

export default Homepage;
