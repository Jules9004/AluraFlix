import React from 'react';
import diaPas from './images/drama/diaPas.jpeg';
import miEsCon from './images/drama/miEsCon.jpeg';
import noMeOlv from './images/drama/noMeOlv.jpeg';
import laCabaña from './images/drama/laCabaña.jpeg';

function Drama() {
 
  const drama = [
    { title: 'Mientras estés conmigo',  image: miEsCon, link: 'https://www.youtube.com/watch?v=LMqr8k1YChI' },
    { title: 'Diario de una pasión',  image: diaPas, link: 'https://www.youtube.com/watch?v=RyApT_vkuyg&list=PL_bVaES4g8sXQ7S1t5QrPhcryRE-95Hr6' },
    { title: 'No me olvides',  image: noMeOlv, link: 'https://www.youtube.com/watch?v=9LOlR03VlQQ' },
    { title: 'La Cabaña',  image: laCabaña, link: 'https://www.youtube.com/watch?v=ACIoJ5z0tds' },
  ];

  return (
    <div>
      <h2 style={{marginLeft:'48%'}}>Drama</h2>
      <div style={{ display: 'flex', flexWrap:'wrap', justifyContent:'space-between' }}>
        {drama.map((movie, index) => (
          <div key={index} style={{ margin: '15px', textAlign: 'center' }}>
            <h3>{movie.title}</h3>
            <img src={movie.image} alt={movie.title} style={{ width: '300px', height: '400px' }} />
            <p>{movie.director}</p>
            <a href={movie.link} style={{marginLeft:'30%'}}>Ver película</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Drama;
