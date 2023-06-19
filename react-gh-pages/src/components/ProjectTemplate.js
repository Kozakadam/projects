function ProjectTemplate({ title, img, idx }){
    const projectId = `project${idx}`;
    const projectTitleId = `projectTitle${idx}`
    return(
    
    <a href='https://kozakadam.github.io/pokemon/'><div id={projectId}>
        <div className="title" id={projectTitleId}>{title}</div>
        <div className="projectImage"><div id='pokemonImg'></div></div>
        <div className="paragraph">Basic pokeom fighting app, data is from PokeApi.</div>
        <div className="readMore"> Visit the site..</div>
    </div></a>
    )
}

export default ProjectTemplate;