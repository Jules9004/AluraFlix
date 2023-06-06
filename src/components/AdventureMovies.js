import React from 'react';

import badBoys from './images/accion/badBoys.jpeg';
import agFortune from './images/accion/agFortune.jpeg';
import lostCity from './images/accion/lostCity.jpeg';

function AdventureMovies() {
 
  const adventureMovies = [
    
    { title: 'BAD BOYS',  image: badBoys, link: 'https://www.youtube.com/watch?v=fssadefZi0c' },
    { title: 'AGENTE FORTUNE: EL GRAN ENGAÑO',  image: agFortune, link: 'https://www.youtube.com/watch?v=xv9dfNAendA' },
    { title: 'LA CIUDAD PERDIDA',  image: lostCity, link: 'https://www.youtube.com/watch?v=5X6NY2Pj7fo' },
    
  ];

  return (
    <div>
      <h2 style={{marginLeft:'40%'}}>Películas de Aventura</h2>
      <div style={{ display: 'flex', flexWrap:'wrap', justifyContent:'space-between' }}>
        {adventureMovies.map((movie, index) => (
          <div key={index} style={{ margin: '15px', textAlign: 'center' }}>
            <h3>{movie.title}</h3>
            <img src={movie.image} alt={movie.title} style={{ width: '300px', height: '400px' }} />
            <p>Director: {movie.director}</p>
            <a href={movie.link}>Ver película</a>
          </div>
        ))}
      </div>
    </div>
  );
}


export default AdventureMovies;


