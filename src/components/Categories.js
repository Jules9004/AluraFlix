import React from 'react';
import { Link } from 'react-router-dom';

function Categories() {
  return (
    <div className="form-categories" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Categorías</h2>
      <br />
      <br />
      <br />
      <Link to="/accion">Acción</Link> <br />
      <Link to="/aventura">Aventura</Link> <br />
      <Link to="/infantil">Infantil</Link> <br />
      <Link to="/ciencia-ficcion">Ciencia Ficción</Link> <br />
      <Link to="/comedia">Comedia</Link> <br />
      <Link to="/documentales">Documentales</Link> <br />
      <Link to="/drama">Drama</Link><br />
      <Link to="/fantasia">Fantasía</Link>
    </div>
  );
}

export default Categories;