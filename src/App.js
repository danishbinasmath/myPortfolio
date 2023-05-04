import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Footer from './components/Footer';
import "./App.css";
import './css/styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
