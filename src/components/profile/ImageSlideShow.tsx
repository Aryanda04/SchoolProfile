"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/dummy1.jpg",
  "/dummy2.jpg",
  "/dummy3.jpg",
  "/dummy4.jpg",
  "/dummy5.jpg",
  "/dummy6.jpg",
  "/dummy7.jpg",
  "/dummy8.jpg",
];

const ImageSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getImageIndex = (index: number) => {
    if (index < images.length) {
      return index;
    }
    return index % images.length;
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / 3)}%)`,
          width: `${Math.ceil(images.length / 3) * 100}%`,
        }}
      >
        {Array.from({ length: Math.ceil(images.length / 3) * 3 }).map(
          (_, index) => (
            <div key={index} className="w-1/3 p-2">
              <Image
                src={images[getImageIndex(index)]}
                alt={`Slide ${getImageIndex(index) + 1}`}
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ImageSlideshow;
