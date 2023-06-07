import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
        <h3>Agregar Categoría</h3>
        <div>
          <label htmlFor="categoryName">Nombre de la categoría:</label>
        </div>
        <div>
          <input type="text" name="categoryName" id="categoryName" required style={{ width: '300px', height: '30px', marginBottom: '1.5rem' }} />
        </div>
        
        <button type="submit" style={{ width: '150px', height: '40px', padding: '0.5rem 1rem', borderRadius: '10px' }}>Agregar categoría</button>
      </form>
    </div>
  );
}

export default Categories;