import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Contact'
import About from './components/About'
import CarouselComponent from './components/CarouselComponent'

function App() {
  return (
    <div className="main">
      <Header />
      <About />
      <CarouselComponent />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
