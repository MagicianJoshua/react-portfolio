import React from "react";
import "../styles/ProjectCard.css";

export default function ProjectCard(props) {
  return (
    <div className="ProjectCard">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <a href={props.webLink}>Website Link</a>
      <a href={props.gitRepo}>Github Repo</a>
    </div>
  );
}

// const ProjectTitle = ["TItle"];
// const ProjectDescription = ["Description"];
// const ProjectLink = ["Sitelink"];
// const ProjectRepo = ["RepoLink"];
