import SpinnerComponent from "./Spinner/SpinnerComponent";

const SPINNER_COUNT = 4;

function Home({projects, aboutMe}) {
  function toProjects() {
    projects.current.scrollIntoView();
  }

  function toAboutMe() {
    aboutMe.current.scrollIntoView();
  }

  return (
    <div id="home">
      <div>
        <div>
          My personal projects!
        </div>
        <p className="details">
          Here are my projects I deemed worthy of sharing!
          At the moment it is only a placeholder!
        </p>
        <button id='projectButton' onClick={toProjects}>Projects</button>
        <button id="aboutMeButtonContainer">
          <span className="material-symbols-outlined symbol1">trending_flat</span>
          <span id="aboutMeButton" onClick={toAboutMe}>About Me</span>
        </button>
      </div>
      <SpinnerComponent spinnerCount={SPINNER_COUNT}/>
    </div>
  )
}

export default Home;
