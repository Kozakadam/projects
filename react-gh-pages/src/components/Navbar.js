function Navbar({ projects, techs, aboutMe }){
    function toProjects(){
        projects.current.scrollIntoView('align');
    }
    function toTechs(){
        techs.current.scrollIntoView('align');
    }
    function toAboutMe(){
        aboutMe.current.scrollIntoView('align');
    }
    return(
        <div>
            <ul id="navbar">
                <li id="navProjects" onClick={toProjects}>Projects</li>
                <li id="navTechnologies" onClick={toTechs}>Technologies</li>
                {/* <li id="navDesign">Design</li> */}
                <li id="navAboutMe" onClick={toAboutMe}>About Me</li>
            </ul>
        </div>
    )
}

export default Navbar;