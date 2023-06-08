import React, { useState } from 'react';
import TextField from "@mui/material/TextField";

function VideoForm() {
  const [videoTitle, setVideoTitle] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [showVideo, setShowVideo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Título del video:', videoTitle);
    console.log('URL del video:', videoUrl);
    console.log('URL de la imagen del video:', imageUrl);
    console.log('Categoría:', category);
    console.log('Descripción:', description);
    console.log('Código de seguridad:', securityCode);

    setShowVideo(true);
  };

  const handleClear = () => {
    setVideoTitle('');
    setVideoUrl('');
    setImageUrl('');
    setCategory('');
    setDescription('');
    setSecurityCode('');
    setShowVideo(false);
  };

  return (
    <div className="form-container">
        <h2>VIDEO NUEVO</h2>
        {showVideo && (
            <div className="video-container">
              <h3>{videoTitle}</h3>
              <video controls>
                <source src={videoUrl} type="video/mp4" />
              </video>
            </div>
          )}
        <div className="form-video">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Título del video:
                <TextField
                  type="text"
                  variant="outlined" 
                  fullWidth
                  margin="normal"
                  value={videoTitle}
                  onChange={(e) => setVideoTitle(e.target.value)}
                />
              </label>
            </div>
            <div className="form-row">
              <label>
                URL del video:
                <TextField
                  type="text"
                  variant="outlined" 
                  fullWidth
                  margin="normal"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                />
              </label>
            </div>
            <div className="form-row">
              <label>
                URL de la imagen del video:
                <TextField
                  type="text"
                  variant="outlined" 
                  fullWidth
                  margin="normal"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </label>
            </div>
            <div className="form-row">
            <label style={{width: '30%', height: '70px'}}>
              Categoría:
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Seleccione una categoría</option>
                <option value="accion">Acción</option>
                <option value="aventura">Aventura</option>
                <option value="infantil">Infantil</option>
                <option value="cienciaFiccion">Ciencia Ficción</option>
                <option value="comedia">Comedia</option>
                <option value="documentales">Documentales</option>
                <option value="drama">Drama</option>
                <option value="fantasia">Fantasía</option>
               
              </select>
            </label>
          </div>
            <div className="form-row">
              <label>
                Descripción:
                <TextField
                  variant="outlined" 
                  fullWidth
                  margin="normal"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
            </div>
            <div className="form-row">
              <label>
                Código de seguridad:
                <TextField
                  type="text"
                  variant="outlined" 
                  fullWidth
                  margin="normal"
                  value={securityCode}
                  onChange={(e) => setSecurityCode(e.target.value)}
                />
              </label>
            </div>
            <div className="form-buttons">
              <button variant="contained" type="submit" className="btn-submit" style={{ width:'150px', height:'40px',padding: '0.5rem 1rem', borderRadius:'10px', backgroundColor:'lightcoral' }}>Guardar Video</button>
              <button type="button" className="btn-clear" onClick={handleClear} style={{ width:'150px', height:'40px',padding: '0.5rem 1rem', borderRadius:'10px' }}>Limpiar</button>
            </div>
        </form>
        
      </div>
    </div>
  );
}

export default VideoForm