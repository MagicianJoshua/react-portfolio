import ProjectCard from "./ProjectCard";
import { ProjectInfo } from "../utils/ProjectInfo";

import "../styles/ProjectCardBox.css";

function ProjectCardBox() {
  return (
    <div className="ProjectContainer">
      <div className="ProjectCardBox" id="Projects">
        {ProjectInfo.map((project, key) => (
          <ProjectCard
            key={key}
            title={project.title}
            description={project.desc}
            webLink={project.link}
            gitRepo={project.gitRepo}
            img={project.img}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectCardBox;
