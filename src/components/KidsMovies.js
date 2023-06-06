import React from 'react';
import froz from './images/infantil/froz.jpeg';
import toySt from './images/infantil/toySt.jpeg';
import encanto from './images/infantil/encanto.jpeg';
import ratatoui from './images/infantil/ratatoui.jpeg';
import ralph from './images/infantil/ralph.jpeg';
import rio2 from './images/infantil/rio2.jpeg';
import monst from './images/infantil/monst.jpeg';
import bigHero from './images/infantil/bigHero.jpeg';

function KidsMovies() {
 
  const kidsMovies = [
    { title: 'FROZEN',  image: froz, link: 'https://www.youtube.com/watch?v=HC2hHNOBqXg' },
    { title: 'TOY STORY',  image: toySt, link: 'https://www.youtube.com/watch?v=pxzAOb7_bXc' },
    { title: 'ENCANTO',  image: encanto, link: 'https://www.youtube.com/watch?v=ODFadX49UlQ' },
    { title: 'RATATOUILLE',  image: ratatoui, link: 'https://www.youtube.com/watch?v=1LRKWIOJHDs' },
    { title: 'RALPH EL DEMOLEDOR',  image: ralph, link: 'https://www.youtube.com/watch?v=XU_JNF_nXBw' },
    { title: 'RIO 2',  image: rio2, link: 'https://www.youtube.com/watch?v=E8KNgMvV4dc' },
    { title: 'MONSTERS INC',  image: monst, link: 'https://www.youtube.com/watch?v=ZrxCRySeHNE' },
    { title: 'BIG HERO6',  image: bigHero, link: 'https://www.youtube.com/watch?v=3HGTmEnEfog' },
  ];

  return (
    <div>
      <h2 style={{marginLeft:'40%'}}>Películas Infantiles</h2>
      <div style={{ display: 'flex', flexWrap:'wrap', justifyContent:'space-between' }}>
        {kidsMovies.map((movie, index) => (
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

export default KidsMovies;
