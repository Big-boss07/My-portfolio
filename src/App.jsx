import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";


function App() {
  return (
      <div>
  <Navbar />
  <Hero id="home" />
  <About id="about" />
  <Projects id="projects" />
  <Contact id="contact" />
    </div>
  );
}

export default App;
