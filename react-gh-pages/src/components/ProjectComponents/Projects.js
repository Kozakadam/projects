import ProjectTemplate from "./ProjectTemplate";
import projectData from "../../data/projectData";

function Projects({projects}) {
  return (
    <div>
      <div id="projectsContainer" ref={projects}>
        {projectData.map(project => {
          return <ProjectTemplate
            project={project}
            key={project.id}
          />
        })}
      </div>
      <div id="currentProjectDisplay">

      </div>
    </div>
  )
}

export default Projects;
