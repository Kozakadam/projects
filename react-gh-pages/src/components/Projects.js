import ProjectTemplate from "./ProjectTemplate";
import pokemon from '../images/pokemon.png';
import quiz from '../images/quiz.png';
import stackoverflow from '../images/stackoverflow.png';

function Projects({projects}) {
  return (
    <div>
      <div id="projectsContainer" ref={projects}>
        <ProjectTemplate
          title={'Pokemon'}
          img={pokemon}
          idx={1}
          description={"Basic pokemon fighting app, data is from PokeApi."}
          visitable={true}/>
        <ProjectTemplate
          title={'Quiz Site'}
          img={quiz}
          description={"Kahoot like multiplayer quiz site with detailed quiz editor."}
          idx={2}/>
        <ProjectTemplate
          title={'Stackoverflow copy'}
          img={stackoverflow}
          description={"Stackoverflow copy. Ask or answer questions, vote for other submissions."}
          idx={3}
        />
        <div id="project4">
          <div className="title" id="projectTitle4">Placeholder</div>
          <div className="projectImg"></div>
          <div className="paragraph">Placeholder description.</div>
        </div>
      </div>
      <div id="currentProjectDisplay">

      </div>
    </div>
  )
}

export default Projects;