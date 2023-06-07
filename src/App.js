import './Global.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VideoForm from './components/VideoForm';
import Categories from './components/Categories.js';
import ActionMovies from './components/ActionMovies.js';
import AdventureMovies from './components/AdventureMovies';
import KidsMovies from './components/KidsMovies';
import Comedy from './components/Comedy';
import Documentaries from './components/Documentaries';
import Drama from './components/Drama';


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
          <Route path="/infantil" element={<KidsMovies />}/>
          <Route path="/comedia" element={<Comedy />} />
          <Route path="/documentales" element={<Documentaries />} />
          <Route path="/drama" element={<Drama />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

