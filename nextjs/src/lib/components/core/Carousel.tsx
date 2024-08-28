'use client'

import React, { useState } from 'react';
import '../../../styles/Carousel.css';
import Card from "~/lib/components/core/Card";
import Image from "next/image";

const cards = [
    {
        id : 0,
        image : '/assets/Image.svg'
    },
    {
        id : 1,
        image : '/assets/Image (1).svg'
    },
    {
        id : 4,
        image : '/assets/Image (6).svg'
    },
    {
        id : 5,
        image : '/assets/Image (8).svg'
    },
    {
        id : 6,
        image : '/assets/Image (10).svg'
    },
    {
        id : 7,
        image : '/assets/Image (1).svg'
    },
    {
        id : 9,
        image : '/assets/Image (20).svg'
    },
]

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    const getClassName = (index) => {
        const distance = (index - activeIndex + cards.length) % cards.length;

        switch (distance) {
            case 0:
                    return 'carousel__slide carousel__slide--active [&>.active-card]:flex [&>.mid-card]:hidden';
            case 1:
                return 'carousel__slide carousel__slide--right';
            case 2:
                return 'carousel__slide carousel__slide--mid-right';
            case 3:
                return 'carousel__slide carousel__slide--far-right';
            case cards.length - 1:
                return 'carousel__slide carousel__slide--left';
            case cards.length - 2:
                return 'carousel__slide carousel__slide--mid-left';
            case cards.length - 3:
                return 'carousel__slide carousel__slide--far-left';
            default:
                return 'carousel__slide carousel__slide--hidden';
        }
    };

    return (
        <div className="carousel">

            <button
                className="carousel__button carousel__button--left min-w-[47px] h-full rounded-full flex justify-center items-center bg-elevation-3-dark cursor-pointer hover:brightness-125" onClick={prevSlide}>
                <Image width={0} height={0} src="/assets/chevron (down).svg" className="w-[23px] h-[23px]" alt="" />
            </button>

            <div className="carousel__track-container min-h-[309px] min-md:h-[244px]">
                <ul className="carousel__track">
                    {
                        cards.map(({id, image}, index) => (
                            <li className={getClassName(index)} key={index}>
                                <Card image = {image} activeCard={index === activeIndex} far={index === cards.length - 3 || index === 3} />
                            </li>
                        ))
                    }
                </ul>
            </div>

            <button
                className="carousel__button carousel__button--right min-w-[47px] h-full rounded-full flex justify-center items-center bg-elevation-3-dark cursor-pointer hover:brightness-125" onClick={nextSlide}>
                <Image width={0} height={0} src="/assets/chevron (down).svg" className="w-[23px] h-[23px] rotate-180"
                       alt="" />
            </button>
        </div>
    );
};

export default Carousel;
