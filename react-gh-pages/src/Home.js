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
                <button id="aboutMeButton">About Me</button>
            </div>
            <div>
                <div class="circle circle1"></div>
                <div class="circle circle2"></div>
                <div class="circle circle3"></div>
                <div class="circle circle4"></div>
            </div>
        </div>
   )
}

export default Home;