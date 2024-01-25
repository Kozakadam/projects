function Navbar({ projects, techs, aboutMe }){
    function toProjects(){
        projects.current.scrollIntoView();
    }
    function toTechs(){
        techs.current.scrollIntoView();
    }
    function toAboutMe(){
        aboutMe.current.scrollIntoView();
    }
    return(
        <div>
            <ul id="navbar">
                <li id="navProjects" onClick={toProjects}>Projects</li>
                <li id="navTechnologies" onClick={toTechs}>Technologies</li>
                <li id="navAboutMe" onClick={toAboutMe}>About Me</li>
            </ul>
        </div>
    )
}

export default Navbar;
