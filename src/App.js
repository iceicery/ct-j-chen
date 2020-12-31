import React from 'react'
import './App.css';
import { Element } from 'react-scroll';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import News from './components/News/News';
import Works from './components/Works/Works';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Header />
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
