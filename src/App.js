import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
// import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
