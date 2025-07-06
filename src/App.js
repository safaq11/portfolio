import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MyNavbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <MyNavbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact /> 
      <Footer />
    </>
  );
}

export default App;