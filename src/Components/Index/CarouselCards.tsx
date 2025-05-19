import { Carousel } from '@mantine/carousel';
import { CardEventos } from './CardEvents';
import { eventos } from '../../Data/Events';
import classes from './CarouselCards.module.css';
import { IconChevronLeft,IconChevronRight } from '@tabler/icons-react';
import { EmblaCarouselType } from 'embla-carousel';
import { Text,ActionIcon, Group } from '@mantine/core';
import { useState } from "react";
import { CarouselCard } from '../../Interface/CarouselCard';



export function CardsCarousel(title: CarouselCard) {
    const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);
    const handleNext = () => embla?.scrollNext();
    const handlePrev = () => embla?.scrollPrev();


    const slides = eventos.sort(() => Math.random() - 0.5).slice(0, 10).map((item) => (
        <Carousel.Slide key={item.id}>
            <CardEventos evento={item} />
        </Carousel.Slide>
    ));
    return (
        <>
            <Text className={classes.text}>
                <div className={classes.title}>{title.title}</div> 
                <div className={classes.verTodos}>
                    <a href="#">Ver Todos</a>
                    <Group>
                        <ActionIcon className={classes.control} onClick={handlePrev}><IconChevronLeft /></ActionIcon>
                        <ActionIcon className={classes.control} onClick={handleNext}><IconChevronRight /></ActionIcon>
                    </Group>
                </div>
            </Text>   
            <Carousel
                withControls={false}
                w="100%"
                getEmblaApi={setEmbla}
                slideSize={{ base: '100%', sm: '20%', md: '20%' }}
                slideGap={{ base: 0, sm: 'md' }}
                height={400}
                classNames={{ controls: classes.controls, control: classes.control }}
            >
                {slides}
            </Carousel>
        </>
    );
}