import ProjectTemplate from "./ProjectTemplate";

function Projects({projects}){
    return(
        <div>
            <div id="projectsContainer" ref={projects}>
                <ProjectTemplate
                title={'Pokemon'}
                img={'./../Images/pokemon.png'}
                idx={1}/>
                <div id="project2">
                    <div className="title" id="projectTitle2">Placeholder2</div>
                    <div className="projectImg"></div>
                    <div className="paragraph">Nunc risus magna, accumsan eu tortor eget, sodales feugiat enim.</div>
                    {/* <div className="readMore">Read more..</div> */}
                </div>
                <div id="project3">
                    <div className="title" id="projectTitle3">Placeholder3</div>
                    <div className="projectImg"></div>
                    <div className="paragraph">Duis varius sollicitudin rutrum.</div>
                    {/* <div className="readMore">Read more..</div> */}
                </div>
                <div id="project4">
                    <div className="title" id="projectTitle4">Placeholder4</div>
                    <div className="projectImg"></div>
                    <div className="paragraph">Morbi quis enim ut massa tempor semper nec non nisi.</div>
                    {/* <div className="readMore">Read more..</div> */}
                </div>
            </div>
            <div id="currentProjectDisplay">

            </div>
        </div>
    )
}

export default Projects;