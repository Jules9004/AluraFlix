import React from 'react';
import blackPanther from './images/accion/blackPanther.jpeg';
import vendetta from './images/accion/vendetta.jpeg';
import blackWidow from './images/accion/blackWidow.jpeg'; 
import divergent from './images/accion/divergent.jpeg';
import savingPrivateRyan from './images/accion/savingPrivateRyan.jpeg';


function ActionMovies() {
 
  const actionMovies = [
    { title: 'BLACK PANTHER',  image: blackPanther, link: 'https://16.cuevana4.me/black-panther-wakanda-forever/' },
    { title: 'V FOR VENDETTA',  image: vendetta, link: 'https://www.youtube.com/watch?v=lSA7mAHolAw' },
    { title: 'BLACK WIDOW',  image: blackWidow, link: 'https://www.youtube.com/watch?v=gR3JFH_3LhY' },
    { title: 'DIVERGENTE',  image: divergent, link: 'https://www.youtube.com/watch?v=CZ6_TMmgDtc&list=PLZW7P3HHfhJkKuPiQwRZHFeR_3nrBtGpF' },
    { title: 'RESCATANDO A SOLDADO RYAN',  image: savingPrivateRyan, link: 'https://www.youtube.com/watch?v=XkPA4XrWiy8' },
    
    
  ];

  return (
    <div>
      <h2 style={{marginLeft:'40%'}}>Películas de acción</h2>
      <div style={{ display: 'flex', flexWrap:'wrap', justifyContent:'space-between' }}>
        {actionMovies.map((movie, index) => (
          <div key={index} style={{ margin: '15px', textAlign: 'center' }}>
            <h3>{movie.title}</h3>
            <img src={movie.image} alt={movie.title} style={{ width: '300px', height: '400px' }} />
            <p> {movie.director}</p>
            <a href={movie.link} style={{marginLeft:'20%'}}>Ver película/ trailer</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActionMovies;
