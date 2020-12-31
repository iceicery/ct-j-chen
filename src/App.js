import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import News from './components/News/News';
import Works from './components/Works/Works';

function App() {
  return (
    <div className="App">
      <Header />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
