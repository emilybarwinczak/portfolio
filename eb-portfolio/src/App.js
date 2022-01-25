import './App.css'
import Header from './components/header/Header'
import About from './components/about/About'


function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <About />
      </div>
    </div>
  );
}

export default App;