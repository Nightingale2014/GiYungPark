import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      src: "/images/turandot.jpg",
      text: "인터파크 LIVE: 탑스텐 인기 지점 최대 75% 할인",
      subText: "4월 4일(금) 오후 7시 방송",
      category: "투란도트",
    },
    {
      src: "/images/artfair.jpg",
      text: "2025 코엑스 아트페어",
      subText: "미래의 예술, 오늘의 선택!",
      category: "아트페어",
    },
    {
      src: "/images/vangogh.jpg",
      text: "빈센트 반 고흐: 미술의 거장",
      subText: "전 세계적인 고흐 전시회!",
      category: "전시회",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel-container">
      <img src={images[currentIndex].src} alt={images[currentIndex].category} />
      <div className="carousel-text">
        <h2>{images[currentIndex].text}</h2>
        <p>{images[currentIndex].subText}</p>
        <span>{images[currentIndex].category}</span>
      </div>
      <button onClick={prevSlide}>◀</button>
      <button onClick={nextSlide}>▶</button>
    </div>
  );
};

export default Carousel;
