import React from 'react';

function AdventureMovies() {
  // Lista de películas de acción (puedes obtener los datos de alguna fuente externa)
  const actionMovies = [
    { title: 'Película de acción 1', director: 'Director 1' },
    { title: 'Película de acción 2', director: 'Director 2' },
    // Agrega más películas de acción según sea necesario
  ];

  return (
    <div>
      <h2>Películas de acción</h2>
      <ul>
        {actionMovies.map((movie, index) => (
          <li key={index}>
            <h3>{movie.title}</h3>
            <p>Director: {movie.director}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdventureMovies;

