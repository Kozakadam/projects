function ProjectTemplate({project}) {
  return (
      <a href={project.link}>
        <div id={project.id} className="projectCard">
          <div className="title">{project.title}</div>
          <div className="projectImage">
            <img src={project.img} className="projectImg"></img>
          </div>
          <div className="paragraph">{project.description}</div>
          <div className="readMore"> {project.visitable ? "Visit the site..." : "Not yet deployed..."}</div>
        </div>
      </a>
  )
}

export default ProjectTemplate;
