function ProjectTemplate({title, img, idx, description, visitable}) {
  const projectId = `project${idx}`;
  const projectTitleId = `projectTitle${idx}`
  return (

    <a href='https://kozakadam.github.io/pokemon/'>
      <div id={projectId}>
        <div className="title">{title}</div>
        <div className="projectImage">
          <img src={img} className="projectImg"></img>
        </div>
        <div className="paragraph">{description}</div>
        <div className="readMore"> {visitable ? "Visit the site..." : "Not yet deployed..."}</div>
      </div>
    </a>
  )
}

export default ProjectTemplate;