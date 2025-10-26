
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      Hello My portfolio
      <Header />
      <Hero />
      <About />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
