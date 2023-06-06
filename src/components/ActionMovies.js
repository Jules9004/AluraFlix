import React from 'react';
import blackPanther from './images/accion/blackPanther.jpeg';
import vendetta from './images/accion/vendetta.jpeg';
import blackWidow from './images/accion/blackWidow.jpeg'; 
import divergent from './images/accion/divergent.jpeg';
import savingPrivateRyan from './images/accion/savingPrivateRyan.jpeg';
import badBoys from './images/accion/badBoys.jpeg';
import agFortune from './images/accion/agFortune.jpeg';
import lostCity from './images/accion/lostCity.jpeg';

function ActionMovies() {
 
  const actionMovies = [
    { title: 'BLACK PANTHER',  image: blackPanther, link: 'https://www.youtube.com/watch?v=EdgxBprt0gM' },
    { title: 'V FOR VENDETTA',  image: vendetta, link: 'https://www.youtube.com/watch?v=pxzAOb7_bXc' },
    { title: 'BLACK WIDOW',  image: blackWidow, link: 'https://www.youtube.com/watch?v=OqzdxtYuEG0' },
    { title: 'DIVERGENTE',  image: divergent, link: 'https://www.youtube.com/watch?v=y3MqfDIKZWs&pp=ygUKaW5zdXJnZW50ZQ%3D%3D' },
    { title: 'RESCATANDO A SOLDADO RYAN',  image: savingPrivateRyan, link: 'https://www.youtube.com/watch?v=XkPA4XrWiy8' },
    { title: 'BAD BOYS',  image: badBoys, link: 'https://www.youtube.com/watch?v=fssadefZi0c' },
    { title: 'AGENTE FORTUNE: EL GRAN ENGAÑO',  image: agFortune, link: 'https://www.youtube.com/watch?v=xv9dfNAendA' },
    { title: 'LA CIUDAD PERDIDA',  image: lostCity, link: 'https://www.youtube.com/watch?v=5X6NY2Pj7fo' },
    
  ];

  return (
    <div>
      <h2 style={{marginLeft:'40%'}}>Películas de acción</h2>
      <div style={{ display: 'flex', flexWrap:'wrap', justifyContent:'space-between' }}>
        {actionMovies.map((movie, index) => (
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

export default ActionMovies;
