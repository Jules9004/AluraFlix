import React from 'react';

const VideoCard = () => {
  const videos = [
    'https://www.youtube.com/watch?v=y_Dj-OWx1-k&list=PLNq2eaZvd5PsY9bF9QTeJ30IRscWVT_4c&index=3',
    'https://www.youtube.com/watch?v=t5fQXZEZQ_M&list=PLNq2eaZvd5PsY9bF9QTeJ30IRscWVT_4c&index=64&pp=iAQB',
    'https://www.youtube.com/watch?v=hKwCeLNR4EA&list=PLNq2eaZvd5PsY9bF9QTeJ30IRscWVT_4c&index=80',
    'https://www.youtube.com/watch?v=IGOCZ9kyUns&list=PLNq2eaZvd5PsY9bF9QTeJ30IRscWVT_4c&index=71',
    'https://www.youtube.com/watch?v=A-6eXt2fxf8&list=PLNq2eaZvd5PsY9bF9QTeJ30IRscWVT_4c&index=50'
  ];

  return (
    <div>
      <h2 style={{ display: 'flex', flexWrap:'wrap',  justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row' }}>Videos</h2>
       {videos.map((videoURL, index) => (
        <div key={index} >
          <iframe
            src={`https://www.youtube.com/embed/${videoURL}`}
            title="Video"
            width="500"
            height="300"
            frameBorder="0"
            allowFullScreen
            
          ></iframe>
        </div>
      ))}
    </div>
    
  );
};

export default VideoCard;
