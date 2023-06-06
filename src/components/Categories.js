import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/* function Categories() {
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
} */
function Categories() {
  const [categories, setCategories] = useState(['Accion', 'Aventura', 'Infantil',  'Comedia', 'Documentales']);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const categoryName = e.target.elements.categoryName.value;
    setCategories((prevCategories) => [...prevCategories, categoryName]);
    e.target.reset();
  };

  return (
    <div className="form-categories" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Categorías</h2>
      <br />
      <div style={{ fontSize: '25px', marginLeft: '15px', transition: '1s' }}>
        {categories.map((category, index) => (
          <Link key={index} to={`/${category.toLowerCase().replace(' ', '-')}`} style={{ fontSize: '25px', marginLeft: '15px', transition: '1s' }}>
            {category}
            <br />
            <br />
          </Link>
        ))}
      </div>
      <br />
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="categoryName" placeholder="Nombre de la categoría" required style={{ width: '300px', height: '30px', marginBottom: '1.5rem' }} />
        <button type="submit" style={{ width: '150px', height: '40px', padding: '0.5rem 1rem', borderRadius: '10px' }}>Agregar categoría</button>
      </form>
    </div>
  );
}

export default Categories;