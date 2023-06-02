import React from 'react';
import { Container } from 'react-bootstrap';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Projects from './components/Projects';

const Home = () => {
  return (
    <>
      <Container>
        <HeroSection />
        <Skills />
        <Projects />
      </Container>
    </>
  );
};

export default Home;
