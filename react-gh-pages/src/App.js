import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import Tech from './components/Tech.js';
import './App.css';
import { useRef } from 'react';

function App() {
  const projectsElement = useRef();
  const techElement = useRef();
  return (
    <div className="App">
      <Navbar projects={projectsElement} techs={techElement}/>
      <Home projects={projectsElement}/>
      <Projects projects={projectsElement}/>
      <Tech tech={techElement}/>
    </div>
  );
}

export default App;
