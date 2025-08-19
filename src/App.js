import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          
          <Hero />
          <Skills />
          <Projects /> 
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;