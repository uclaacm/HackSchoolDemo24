import './App.css';
import Navbar from './components/Navbar.tsx';
import { Routes, Route } from 'react-router-dom';

// Import the pages that we'll be routing to
import About from './pages/About';
import HackSchool from './pages/HackSchool';
import Discord from './pages/Discord';
import Home from './pages/Home';

function App() {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hackschool" element={<HackSchool />} />
        <Route path="/Discord" element={<Discord />} />
      </Routes>
    </div>
  );
}

export default App;
