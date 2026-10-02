import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Doctors from './components/Doctors';
import Book from './components/Book';
import Review from './components/Review';
import Blogs from './components/Blogs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <About />
      <Doctors />
      <Book />
      <Review />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;