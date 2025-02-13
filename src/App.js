import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';

import { useDocTitle } from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';

import { Helmet } from 'react-helmet';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("MLD | Molad e Konsult - Bespoke Web and Mobile Applications");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Helmet>
            <meta name="description" content="Molad e Konsult offers bespoke web and mobile application solutions. Explore our services and products." />
            <meta name="keywords" content="web development, mobile apps, bespoke solutions, MLD, Molad e Konsult" />
            <meta property="og:title" content="MLD | Molad e Konsult" />
            <meta property="og:description" content="Molad e Konsult offers bespoke web and mobile application solutions." />
            <meta property="og:image" content="url_to_image.jpg" />
          </Helmet>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
