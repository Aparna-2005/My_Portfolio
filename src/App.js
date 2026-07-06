import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Education from './Components/Education/Education';
import Project from './Components/Projects/Project';
import Navbar from './Components/Navbar/Navbar';
import Certificates from './Components/Certificates/Certificates';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Education/>
      <Skills/>
      <Project/>
      <Certificates/>
      <Contact/>
    </div>
  );
}

export default App;
