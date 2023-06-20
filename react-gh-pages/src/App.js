import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import Tech from './components/Tech.js';
import AboutMe from './components/AboutMe.js';
import './App.css';
import { useRef } from 'react';

function App() {
  const projectsElement = useRef();
  const techElement = useRef();
  const aboutMeElement = useRef();

  return (
    <div className="App">
      <Navbar projects={projectsElement} techs={techElement} aboutMe={aboutMeElement}/>
      <Home projects={projectsElement} aboutMe={aboutMeElement}/>
      <Projects projects={projectsElement}/>
      <Tech tech={techElement}/>
      <AboutMe aboutMe={aboutMeElement}/>
    </div>
  );
}

export default App;
