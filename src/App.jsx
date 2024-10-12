import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Causes from './pages/Causes';
import Navbar from './components/NavBar';

const App = () => {
  return (
    <Router>
    
      <Navbar />

     
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/causes" element={<Causes />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

    
      <Footer />
    </Router>
  );
};

export default App;


