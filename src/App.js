import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VideoForm from './components/VideoForm';
import Categories from './components/Categories.js';
import ActionMovies from './components/ActionMovies.js';
import AdventureMovies from './components/AdventureMovies';


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<VideoForm />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/accion" element={<ActionMovies />} />
          <Route path="/aventura" element={<AdventureMovies />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

