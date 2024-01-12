import ProjectCard from "./ProjectCard";
import { ProjectInfo } from "../utils/ProjectInfo";
import "../styles/ProjectCardBox.css";

function ProjectCardBox() {
  return (
    <div className="ProjectCardBox">
      {ProjectInfo.map((project, key) => (
        <ProjectCard
          key={key}
          title={project.title}
          description={project.desc}
          webLink={project.link}
          gitRepo={project.gitRepo}
        />
      ))}
    </div>
  );
}

export default ProjectCardBox;
