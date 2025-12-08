import React, { useState, useRef, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Carousel.scss';

const Carousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const itemWidth = carouselRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / itemWidth);
      setCurrentIndex(newIndex);
    }
  };

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: itemWidth * index,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      return () => carousel.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="carousel">
      <div className="carousel__wrapper" ref={carouselRef}>
        {products.map((product, index) => (
          <div key={index} className="carousel__item">
            <ProductCard
              size="large"
              image={product.image}
              title={product.title}
              price={product.price}
              originalPrice={product.originalPrice}
              category={product.category}
              description={product.description}
            />
          </div>
        ))}
      </div>
      
      <div className="carousel__indicators">
        {products.map((_, index) => (
          <button
            key={index}
            className={`carousel__indicator ${currentIndex === index ? 'carousel__indicator--active' : ''}`}
            onClick={() => scrollToIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;