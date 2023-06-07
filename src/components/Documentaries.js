import React from 'react';
import pens from './images/documentales/pens.jpeg';
import serH from './images/documentales/serH.jpeg';
import huida from './images/documentales/huida.jpeg';

function Documentaries() {
 
  const documentaries = [
    { title: 'El poder de los pensamientos',  image: pens, link: 'https://www.youtube.com/watch?v=-H5A3iO_SCY' },
    { title: '¿Cómo surgió el ser humano?',  image: serH, link: 'https://www.youtube.com/watch?v=_MGELqOFzO0&t=9s' },
    { title: 'Huída hacia la muerte',  image: huida, link: 'https://www.youtube.com/watch?v=xbNWJlfFeEU' },
    
  ];

  return (
    <div>
      <h2 style={{marginLeft:'40%'}}>Documentales</h2>
      <div style={{ display: 'flex', flexWrap:'wrap', justifyContent:'space-between' }}>
        {documentaries.map((movie, index) => (
          <div key={index} style={{ margin: '15px', textAlign: 'center' }}>
            <h3>{movie.title}</h3>
            <img src={movie.image} alt={movie.title} style={{ width: '300px', height: '400px' }} />
            <p>{movie.director}</p>
            <a href={movie.link} style={{marginLeft:'30%'}}>Ver documental</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Documentaries;
