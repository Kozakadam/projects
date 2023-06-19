function Home({projects}){
    function toProjects(){
        console.log(projects);
        projects.current.scrollIntoView('align');
    }
   return(
        <div id="home">
            <div>
                <div>
                    My personal projects!
                </div>
                <p className="details">
                    You can find here the projects I made during my studies at Codecool!
                    At the moment it is only a placeholder!
                </p>
                <button id='projectButton' onClick={toProjects}>Projects</button>
                <button id="aboutMeButtonContainer">
                    <span className="material-symbols-outlined symbol1">trending_flat</span>
                    <span id="aboutMeButton">About Me</span>
                </button>
            </div>
            <div id="spinnerContainer">
                <div id="spinner3">
                    <div className="circle circle3"></div>
                </div>
                <div id="spinner2">
                    <div className="circle circle2"></div>
                </div>
                <div id="spinner1">
                    <div className="circle circle1"></div>
                </div>
                <div id="spinner4">
                    <div className="circle circle4"></div>
                </div>
            </div>
        </div>
   )
}

export default Home;