import React from 'react';

function VideoList() {
 
  const videos = [
    { id: 1, title: 'Video 1', category: 'Comedia' },
    { id: 2, title: 'Video 2', category: 'Acción' },
    { id: 3, title: 'Video 3', category: 'Drama' },
  ];

  return (
    <div>
      <h2>Videos</h2>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            <h3>{video.title}</h3>
            <p>Categoría: {video.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoList;
