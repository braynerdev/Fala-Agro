import { Carousel } from '@mantine/carousel';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Image } from '@mantine/core';
import '@mantine/carousel/styles.css';
import slide1 from '../../assets/carousel/brad.jpg';
import slide2 from '../../assets/carousel/incuba.png';
import slide3 from '../../assets/carousel/semana-academica.png';
import classes from './Carousels.module.css';


export function CarouselIndex() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  return (
    <Carousel draggable={false} loop withIndicators height="400" slideGap="md" align="start" classNames={{control:classes.control, indicator:classes.indicator}}
    plugins={[autoplay.current]} onMouseEnter={autoplay.current.stop} onMouseLeave={autoplay.current.reset} controlsOffset="xl"> 
      <Carousel.Slide><Image w='100%' h='100%' src={slide1} /></Carousel.Slide>
      <Carousel.Slide><Image w='100%' h='100%' src={slide2} /></Carousel.Slide>
      <Carousel.Slide><Image w='100%' h='100%' src={slide3} /></Carousel.Slide>
    </Carousel>
  );
}