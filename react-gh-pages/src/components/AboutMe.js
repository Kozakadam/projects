import profile from '../images/profile.png'

function AboutMe({aboutMe}){
    return(
        <div className='aboutMeContainer' ref={aboutMe}>
            <img className='portraitImg' src={profile} alt='profile'></img>
            <div className='selfDescription'>
                <div className='nameTitle'>Kozák Ádám Róbert</div>
                <div className='selfDetails'>Junior Full Stack Developer</div>
                <div>Contact:</div>
                <div>kar.adam.robert6@gmail.com</div>
            </div>
        </div>
    )
}

export default AboutMe;