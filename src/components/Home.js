import React, { useState } from 'react';
import Header from './Header';
import Banner from '../Banner';
import VideoList from '../VideoList';

import image1 from './images/image1.jpeg';
import peli4 from './images/peli4.jpeg';
import image3 from './images/image3.jpeg';
import image4 from './images/image4.jpeg';
import image5 from './images/image5.jpeg';
import image6 from './images/image6.jpeg';
import image7 from './images/image7.jpeg';

function Home() {
  const [movies, setMovies] = useState([]); // Estado para almacenar la lista de películas

  // Función para manejar el envío del formulario
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const movieName = e.target.elements.movieName.value;
    const movieURL = e.target.elements.movieURL.value;
    const newMovie = { name: movieName, url: movieURL };
    setMovies((prevMovies) => [...prevMovies, newMovie]);
    e.target.reset();
  };

  return (
    <div className="home" >
      <div className="banner">
        <h1>Bienvenido a Aluraflix</h1>
      </div>
      <div className='images-home' style={{ display: 'flex', flexWrap:'wrap',  justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column' }}>
        <div className='img'>
            <h2>UP</h2>
            <img src={image1} alt="Imagen 1" />
            <h2>Infantil</h2>
        </div>
        <div className='img'>
            <h2>SPIDER MAN</h2>
            <img src={peli4} alt="Imagen 2" />
            <h2>Aventura</h2>
        </div>
        <div className='img'>
            <h2>READY PLAYER ONE</h2>
            <img src={image3} alt="Imagen 3" />
            <h2>Ciencia Ficción</h2>
        </div>
        <div className='img'>
            <h2>UP</h2>
            <img src={image4} alt="Imagen 4" />
            <h2>Infantil</h2>
        </div>
        <div className='img'>
            <h2>THE MINIONS</h2>
            <img src={image5} alt="Imagen 5" />
            <h2>Infantil</h2>
        </div>
        <div className='img'>
            <h2>TOY STORY</h2>
            <img src={image6} alt="Imagen 6" />
            <h2>Infantil</h2>
        </div>
        <div className='img'>
            <h2>MONSTER INC</h2>
            <img src={image7} alt="Imagen 7" />
            <h2>Infantil</h2>
        </div>
        
      </div>
      <div className="video-list" >
        <h2 style={{alignContent: 'center'}}>Videos</h2>
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>
              <h3>{movie.name}</h3>
              <video controls>
                <source src={movie.url} type="video/mp4" />
              </video>
            </li>
          ))}
        </ul>
      </div>
      <div className="add-movie-form" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{alignContent: 'center'}}>Agregar Película</h2>
            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <input type="text" name="movieName" placeholder="Nombre de la película" required style={{ marginBottom: '1rem' }} />
                <input type="text" name="movieURL" placeholder="URL de la película" required style={{ marginBottom: '1rem' }} />
                <button type="submit" style={{ padding: '0.5rem 1rem' }}>Agregar</button>
            </form>
      </div>
    </div>
  );
}

    <div>
      <Header />
      <Banner />
      <VideoList />
    </div>


export default Home;