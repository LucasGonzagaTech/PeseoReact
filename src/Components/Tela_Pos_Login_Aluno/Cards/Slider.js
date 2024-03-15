// Slider.js
import React, { useState } from 'react';
import './Slider.css';
import testeImg from '../../img/estudante.jpg'

// Funcionalidade do slider

const Slider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
// 

  return (
    <div className="slider">
      <button className="prev" onClick={prevSlide}>&#10094;</button>

      {cards.map((card, index) => (
        <div key={index} className={index === currentIndex ? 'slide active' : 'slide'}>
          <img style={{width:200, height:100}} className='testeimg' src={testeImg}/>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Slider;
