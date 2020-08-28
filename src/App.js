import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Carousel from './components/Carousel'

function App() {
  return (
    <div className="main">
      <Header />
      <Carousel />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
