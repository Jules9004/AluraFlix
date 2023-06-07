import React from 'react';
import Slider from 'react-slick';

const VideoSlider = ({ videos }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="video-slider">
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div key={index}>
            <h2>{video.title}</h2>
            <iframe
              src={`https://www.youtube.com/embed/${video.videoId}`}
              title={video.title}
              width="560"
              height="315"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoSlider;