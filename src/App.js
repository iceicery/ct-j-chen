import React, { useState } from 'react'
import './App.css';
import { Element } from 'react-scroll';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import News from './components/News/News';
import Works from './components/Works/Works';
import NavButton from './components/NavButton/NavButton';
import NavPopup from './components/NavPopup/NavPopup';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  function handleNavPopup() {
    setIsNavOpen(true);
  }
  function handleNavClose() {
    setIsNavOpen(false);
  }
  return (
    <div className="App">
      <Header />
      <NavButton handleNavPopup={handleNavPopup} />
      <NavPopup isNavOpen={isNavOpen} handleNavClose={handleNavClose} />
      <React.Fragment>
        <Element id="about" name="about">
          <About />
        </Element>
        <Element id="news" name="news">
          <News />
        </Element>
        <Works />
      </React.Fragment>
      <Footer />
    </div>
  );
}

export default App;
