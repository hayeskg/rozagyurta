import * as React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Contact'
import About from './components/About'
import CarouselComponent from './components/CarouselComponent'

function App() {

  const [english, setEnglish] = React.useState(true);

  return (
    <div className="main">
      <Header english={english} setEnglish={setEnglish}/>
      <About english={english}/>
      <CarouselComponent />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
