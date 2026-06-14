import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './sections/Navbar';
import { Footer } from './sections/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';

import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Works from './pages/Works';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    window.history.scrollRestoration = 'manual';
  }, [location.pathname]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          obs.unobserve(entry.target);
        }
      });
    };

    let observer;
    const timer = setTimeout(() => {
      observer = new IntersectionObserver(handleIntersect, observerOptions);
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, [location.pathname]);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen transition-colors duration-500 overflow-x-hidden">
        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/works" element={<Works />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </ThemeProvider>
  );
}

export default App;
