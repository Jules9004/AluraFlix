import React from 'react';
import whiteMen from './images/comedias/whiteMen.jpeg';
import famMonst from './images/comedias/famMonst.jpeg';
import mist from './images/comedias/mist.jpeg';

function Comedy() {
 
  const comedy = [
    { title: 'Los blancos no saben saltar',  image: whiteMen, link: 'https://www.youtube.com/watch?v=t69fZewkazw' },
    { title: 'La familia Monster va a Europa',  image: famMonst, link: 'https://www.youtube.com/watch?v=a1xbH0JRI88' },
    { title: 'Misterio a la vista',  image: mist, link: 'https://www.youtube.com/watch?v=YDoRi_jNjeI' },
    
  ];

  return (
    <div>
      <h2 style={{marginLeft:'40%'}}>Películas Infantiles</h2>
      <div style={{ display: 'flex', flexWrap:'wrap', justifyContent:'space-between' }}>
        {comedy.map((movie, index) => (
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

export default Comedy;
