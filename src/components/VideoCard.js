import React from 'react';

const VideoCard = ({ videoURL }) => {
  const thumbnailURL = `https://img.youtube.com/vi/${videoURL}/0.jpg`;

  return (
    <div className="video-card">
      <a href={`https://www.youtube.com/watch?v=${videoURL}`} target="_blank" rel="noopener noreferrer">
        <img src={thumbnailURL} alt="Video Thumbnail" />
      </a>
    </div>
  );
};

export default VideoCard;
