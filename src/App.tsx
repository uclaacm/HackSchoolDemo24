import './App.css';
import Navbar from './components/Navbar.tsx';
import { Routes, Route } from 'react-router-dom';

// Import the pages that we'll be routing to
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
