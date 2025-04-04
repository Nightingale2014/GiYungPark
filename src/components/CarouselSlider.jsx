// src/components/CarouselSlider.jsx
import React, { useState, useEffect } from 'react';

const CarouselSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const banners = [
    {
      title: "최대 14% 쿠폰 & 특가 상품 모음",
      description: "봄적으로 준비한 국내여행 혜택",
      imageUrl: "/artfair.jpg"
    },
    {
      title: "탑스텐 인기 지점 최대 75% 할인",
      description: "4월 4일(금) 오후 7시 방송",
      imageUrl: "/txt.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // 5초마다 슬라이드 전환
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <img
        src={banners[currentIndex].imageUrl}
        alt="Banner"
        className="w-full h-[300px] object-cover"
      />
      <div className="absolute bottom-10 left-10 text-white">
        <h2 className="text-2xl font-bold">{banners[currentIndex].title}</h2>
        <p>{banners[currentIndex].description}</p>
      </div>
      <button
        onClick={nextSlide}
        className="absolute top-1/2
