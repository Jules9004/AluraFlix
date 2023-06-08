import React, { useState } from 'react';
import Header from './Header';
import Banner from '../Banner';
import VideoList from '../VideoList';
import VideoCard from './VideoCard';
import VideoSlider from './VideoSlider';

import image1 from './images/image1.jpeg';
import peli4 from './images/peli4.jpeg';
import image3 from './images/image3.jpeg';
import image4 from './images/image4.jpeg';
import image5 from './images/image5.jpeg';
import image6 from './images/image6.jpeg';
import image7 from './images/image7.jpeg';

function Home() {
  const [videos, setVideos] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const movieName = e.target.elements.movieName.value;
    const movieURL = e.target.elements.movieURL.value;
    const newVideo = { name: movieName, url: movieURL };

    setVideos((prevVideos) => [...prevVideos, newVideo]);
    e.target.reset();
  };

  const handleAddVideo = (videoURL) => {
    const newVideo = { videoURL };
    setVideos((prevVideos) => [...prevVideos, newVideo]);
  };

  return (
    <div className="home" >
      <div className="banner">
        <h1>Bienvenido a Aluraflix</h1>
        
      </div>
      <div className='images-home' style={{ display: 'flex', flexWrap:'wrap',  justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row' }}>
        <div className='img' style={{ margin: '15px', textAlign: 'center' }}>
            <h2>UP</h2>
            <img src={image1} alt="Imagen 1" />
            <h2>Infantil</h2>
            <a href="https://www.youtube.com/watch?v=RW71Lw_Qpgw">Ver video</a>
        </div>
        <div className='img' style={{ margin: '15px', textAlign: 'center' }}>
            <h2>SPIDER MAN: Across the Spider-verse </h2>
            <img src={peli4} alt="Imagen 2" />
            <h2>Aventura</h2>
            <a href="https://www.youtube.com/watch?v=oBmazlyP220">Ver trailer</a>
        </div>
        <div className='img' style={{ margin: '15px', textAlign: 'center' }}>
            <h2>READY PLAYER ONE</h2>
            <img src={image3} alt="Imagen 3" />
            <h2>Ciencia Ficción</h2>
            <a href="https://www.youtube.com/watch?v=VbVjIG8QwFc&list=PLQCOP_2p8zOwvTlL3RV_mPkf7LGWSufrk">Ver video</a>
        </div>
        <div className='img' style={{ margin: '15px', textAlign: 'center' }}>
            <h2>JOHN WICK</h2>
            <img src={image4} alt="Imagen 4" />
            <h2>Acción</h2>
            <a href="https://www.youtube.com/watch?v=9Q9tUYjTuCA&list=PL9TGQ5Mf_mGZh_uxCBjSFH42foISzvHri">Ver video</a>
        </div>
        <div className='img' style={{ margin: '15px', textAlign: 'center' }}>
            <h2>THE MINIONS: The rise of Gru</h2>
            <img src={image5} alt="Imagen 5" />
            <h2>Infantil</h2>
            <a href="https://www.youtube.com/watch?v=6DxjJzmYsXo">Ver trailer</a>
        </div>
        <div className='img' style={{ margin: '15px', textAlign: 'center' }}>
            <h2>TOY STORY</h2>
            <img src={image6} alt="Imagen 6" />
            <h2>Infantil</h2>
            <a href="https://www.youtube.com/watch?v=YB1s13MLbAE&list=PLIEJgI0Ct4jxrhYCNCdRShhsdvr4vwSt9">Ver video</a>
        </div>
        <div className='img' style={{ margin: '15px', textAlign: 'center' }}>
            <h2>EL PERMISO</h2>
            <img src={image7} alt="Imagen 7" />
            <h2>Comedia</h2>
            <a href="https://www.youtube.com/watch?v=HHjYBMn8rzg">Ver video</a>
        </div>
        
      </div>
      <div className="video-list" style={{ display: 'flex', flexWrap:'wrap',  justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row' }}>
        <VideoCard handleAddVideo={handleAddVideo} />
      </div>

      <div className="video-slider">
        <VideoSlider videos={videos} />
      </div>

      <div className="add-movie-form" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{alignContent: 'center'}}>Nuevo Video</h2>
            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <input type="text" name="movieName" placeholder="Nombre del video" required style={{ width:'300px', height:'30px', marginBottom: '1.5rem' }} />
                <input type="text" name="movieURL" placeholder="URL del video" required style={{width:'300px', height:'30px', marginBottom: '1.5rem' }} />
                <button type="submit" style={{ width:'150px', height:'40px',padding: '0.5rem 1rem', borderRadius:'10px' }}>Agregar</button>
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