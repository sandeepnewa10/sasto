import React, { useState } from "react";
import { Carousel } from 'react-bootstrap'
import {slider} from '../Data/Data.js'


const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
  return (
   <>
    <section className="slider" id="home">
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {slider.map((list, index) => (
        <Carousel.Item key={list.id}>
          <img className="d-block w-100" src={list.cover} alt="First slide" />
          <Carousel.Caption>
            <span>{list.subtitle}</span>
            <h2>{list.title}</h2> 
            <a href={list.url} className="btn">SHOP NOW</a>          
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </section>
   </>
  )
}

export default Slider