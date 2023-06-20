import profile from '../images/profile.png'

function AboutMe({aboutMe}){
    return(
        <div className='aboutMeContainer' ref={aboutMe}>
            <img className='portraitImg' src={profile} alt='profile'></img>
            <div className='selfDescription'>
                <div className='nameTitle'>Name</div>
                <div className='selfDetails'>Short description. I like dogs nad cats. And I want to check how this text wraps.</div>
                <div>contact1@contact.com</div>
                <div>contact2</div>
            </div>
        </div>
    )
}

export default AboutMe;