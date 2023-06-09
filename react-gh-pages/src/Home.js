function Home(){
   return(
        <div id="home">
            <div>
                <div>
                    My projects at Codecool!
                </div>
                <p className="details">
                    You can find here the projects I made during my studies at Codecool!
                    At the moment it is only a placeholder, but I plan to fill it to the brim soon!
                    Stay tuned!
                </p>
                <button id='projectButton'>Projects</button>
                <button id="aboutMeButtonContainer">
                    <span class="material-symbols-outlined symbol1">trending_flat</span>
                    <span id="aboutMeButton">About Me</span>
                </button>
            </div>
            <div id="spinnerContainer">
                <div id="spinner3">
                    <div class="circle circle3"></div>
                </div>
                <div id="spinner2">
                    <div class="circle circle2"></div>
                </div>
                <div id="spinner1">
                    <div class="circle circle1"></div>
                </div>
                <div id="spinner4">
                    <div class="circle circle4"></div>
                </div>
            </div>
        </div>
   )
}

export default Home;