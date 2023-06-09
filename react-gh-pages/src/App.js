import Navbar from './Navbar.js';
import Home from './Home.js';
import Projects from './Projects.js';
import Tech from './Tech.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Projects/>
      <Tech/>
    </div>
  );
}

export default App;
