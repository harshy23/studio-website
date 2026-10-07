import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home/Home';
import Work from './pages/Work/Work';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className=" text-white selection:text-white min-h-screen relative font-sans flex flex-col justify-between bg-white">
        {/* Premium custom mouse follower */}
        <CustomCursor />

        {/* Sticky navigation */}
        <Navbar />

        {/* Page Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* Global Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
