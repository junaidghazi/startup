import React from 'react';
import { Helmet } from 'react-helmet';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Molad e Konsult</title>
        <meta name="description" content="Molad e Konsult offers bespoke web and mobile application solutions. Discover our services, portfolio, and how we can help bring your ideas to life." />
        <meta name="keywords" content="web development, mobile apps, bespoke solutions, Molad e Konsult" />
        <meta property="og:title" content="Molad e Konsult - Bespoke Web and Mobile Solutions" />
        <meta property="og:description" content="Molad e Konsult specializes in creating custom web and mobile applications for businesses." />
        <meta property="og:image" content="URL_to_image" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Molad e Konsult - Bespoke Web and Mobile Solutions" />
        <meta name="twitter:description" content="Molad e Konsult offers bespoke web and mobile app solutions tailored to your business needs." />
      </Helmet>
      <Hero />
      <Intro />
      <Services />
      <Portfolio />
      <Clients />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
