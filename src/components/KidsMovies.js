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
    { title: 'FROZEN',  image: froz, link: 'https://www.youtube.com/watch?v=aL1nLsO5wtM&list=PLgl7CAfJSrVDOOxJgWFX7K6QbOTbq8jYZ' },
    { title: 'TOY STORY',  image: toySt, link: 'https://www.youtube.com/watch?v=YB1s13MLbAE&list=PLIEJgI0Ct4jxrhYCNCdRShhsdvr4vwSt9' },
    { title: 'ENCANTO',  image: encanto, link: 'https://www.youtube.com/watch?v=JWe_smmkgrw&list=PL3E3n6tt5h1t_-MtDnt7RBUynUJHYlJTJ' },
    { title: 'RATATOUILLE',  image: ratatoui, link: 'https://www.disneyplus.com/es-419/video/13299050-3a5a-4d04-b340-f6e6e26cd312' },
    { title: 'RALPH EL DEMOLEDOR',  image: ralph, link: 'https://www.youtube.com/watch?v=_z5bHnXnCL0&list=PL-O2zW7TvNVVqZY0cydn9Ow_ctO74b5Tz' },
    { title: 'RIO 2',  image: rio2, link: 'https://www.youtube.com/watch?v=E8KNgMvV4dc' },
    { title: 'MONSTERS INC',  image: monst, link: 'https://www.youtube.com/watch?v=Df0LC5ucd_w&list=PLIEJgI0Ct4jywrKkQRc3ep0e6LfmO75up' },
    { title: 'BIG HERO6',  image: bigHero, link: 'https://www.youtube.com/watch?v=3HGTmEnEfog' },
  ];

  return (
    <div>
      <h2 style={{marginLeft:'45%'}}>Películas Infantiles</h2>
      <div style={{ display: 'flex', flexWrap:'wrap', justifyContent:'space-between' }}>
        {kidsMovies.map((movie, index) => (
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

export default KidsMovies;
