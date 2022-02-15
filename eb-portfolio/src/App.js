import './App.css'
import Header from './components/header/Header'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Project from './components/projects/Project'


function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <About />
        <Skills />
        <Project />
      </div>
    </div>
  );
}

export default App;