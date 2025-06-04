import Navbar from './components/Navbar';
import Home from './Pages/Home.jsx';
import Education from './Pages/Education.jsx';
import Projects from './Pages/Projects.jsx';
import Skills from './Pages/Skills.jsx';
import Contact from './Pages/Contact.jsx';

function App() {
  return (
    <div className="App scroll-smooth">
      <Navbar />
      <Home />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
