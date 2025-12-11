import React from 'react';
import { MotionConfig } from 'framer-motion';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Story from './components/Story/Story.jsx';
import Menu from './components/Menu/Menu.jsx';
import Location from './components/Location/Location.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="sht-app">
        <Header />
        <main>
          <Hero />
          <Story />
          <Menu />
          <Location />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
