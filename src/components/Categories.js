import React from 'react';
import { Link } from 'react-router-dom';

function Categories() {
  return (
    <div className="form-categories" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Categorías</h2>
      <br />
      <div style={{fontSize:'25px', marginLeft:'15px', transition:'1s'}}> 
        <Link to="/accion" style={{fontSize:'25px', marginLeft:'15px', transition:'1s'}}>Acción</Link> <br />
        <Link to="/aventura" style={{fontSize:'25px', marginLeft:'15px', transition:'1s'}}>Aventura</Link> <br />
        <Link to="/infantil" style={{fontSize:'25px', marginLeft:'15px', transition:'1s'}}>Infantil</Link> <br />
        <Link to="/ciencia-ficcion" style={{fontSize:'25px', marginLeft:'15px', transition:'1s'}}>Ciencia Ficción</Link> <br />
        <Link to="/comedia" style={{fontSize:'25px', marginLeft:'15px', transition:'1s'}}>Comedia</Link> <br />
        <Link to="/documentales" style={{fontSize:'25px', marginLeft:'15px', transition:'1s'}}>Documentales</Link> <br />
        <Link to="/drama" style={{fontSize:'25px', marginLeft:'15px', transition:'1s'}}>Drama</Link><br />
       
      </div>
      
    </div>
  );
}

export default Categories;