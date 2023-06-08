import React, { useState } from 'react';

const VideoSlider = ({ videos }) => {
const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

function showVideo(index) {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = videos[index];
    setCurrentVideoIndex(index);
  };

  function prevVideo () {
    const newIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    showVideo(newIndex);
  };

  function nextVideo () {
    const newIndex = (currentVideoIndex + 1) % videos.length;
    showVideo(newIndex);
  };

  return (
    <div className="video-slider" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom:'20px'}}>
      <h2>Video Slider</h2>
      <div>
        <iframe
          id="videoPlayer"
          src={videos[currentVideoIndex]}
          title="Video"
          width="560"
          height="315"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <button onClick={prevVideo}>Prev</button>
      <button onClick={nextVideo}>Next</button>
    </div>
  );
};

export default VideoSlider;

