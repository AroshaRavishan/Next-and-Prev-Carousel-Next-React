'use client';
import React, { useRef, useState, useEffect } from 'react';
import MySlider from './MySlider';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import chevronleft from "../public/Images/arrow-left.svg";
import chevronright from "../public/Images/arrow-right.svg";

const categories = [
    { name: 'Information Technology' },
    { name: 'Business' },
    { name: 'Management' },
    { name: 'Administration' },
    { name: 'Project Management' },
    { name: 'Hr & Leadership' },
    { name: 'Sales & Marketing' },
];

const Carousel = () => {
    const splideRef = useRef(null);
    const [hasStarted, setHasStarted] = useState(false);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const prevSlide = () => {
        if (splideRef.current) {
            splideRef.current.splide.go('-1');
        }
    };

    const nextSlide = () => {
        if (splideRef.current) {
            splideRef.current.splide.go('+1');
            setHasStarted(true); // Mark that the slider has started
        }
    };

    const splideOptions = {
        type: 'splide',
        perPage: 4,
        arrows: false,
        pagination: false,
        gap: '1rem',
        autoplay: true,
        perMove: 1,
        interval: 3000,

        autoScroll: {
            speed: 1,
            pauseOnHover: true,
            pauseOnFocus: false,
        },
        breakpoints: {
            1200: {
                perPage: 2,
                gap: '1rem',
            },
            991: {
                perPage: 2,
                gap: '1rem',
            },
            767: {
                perPage: 2,
                gap: '0.5rem',
            },
            575: {
                perPage: 1,
                arrows: false,
                gap: '1rem',
            },
        },
    };

    useEffect(() => {
        const splide = splideRef.current?.splide;

        if (splide) {
            const updateButtons = () => {
                const currentIndex = splide.index;
                const totalSlides = splide.Components.Controller.getEnd();
                setIsAtEnd(currentIndex === totalSlides);
                setHasStarted(currentIndex > 0);
            };

            splide.on('moved', updateButtons);

            // Initially check the state of the slider
            updateButtons();
        }
    }, []);

    return (
        <div className="container pb-10">

            <div className="grid grid-cols-1 lg:grid-cols-12 bg-green-100 rounded-t-3xl h-[30px] lg:h-[60px]">
                <div className="col-span-1 lg:col-span-1 border-bottom"></div>
                <div className="col-span-1 lg:col-span-10 border-left flex items-center justify-center border-bottom border-right">
                </div>
                <div className="col-span-1 lg:col-span-1 border-bottom"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 bg-green-100">
                <div className="col-span-1 lg:col-span-1"></div>
                <div className="col-span-1 lg:col-span-10 border-left border-right border-bottom">
                    <div className="relative">
                        {hasStarted && (
                            <button className="prev absolute top-1/2 transform -translate-y-1/2" onClick={prevSlide}>
                                <div className="text-gray-300 hover:text-white border border-gray-300 rounded-full bg-white w-[35px] h-[35px] flex justify-center items-center">
                                    <img src={chevronleft.src} alt="chevronleft" />
                                </div>
                            </button>
                        )}
                        <div className="mx-10">
                            <Splide options={splideOptions} ref={splideRef}>
                                {categories.map((category, index) => (
                                    <SplideSlide key={index}>
                                        <div className="my-3 lg:my-5 flex justify-center">
                                            <div className='text-base font-medium text-black-900 bg-white rounded-lg w-max py-2.5 px-8 border border-gray-300 cursor-pointer'>
                                                {category.name}
                                            </div>
                                        </div>
                                    </SplideSlide>
                                ))}
                            </Splide>
                        </div>
                        {!isAtEnd && (
                            <button className="next absolute top-1/2 transform -translate-y-1/2 right-0" onClick={nextSlide}>
                                <div className="text-gray-300 hover:text-white border border-gray-300 rounded-full bg-white w-[35px] h-[35px] flex justify-center items-center">
                                    <img src={chevronright.src} alt="chevronright" />
                                </div>
                            </button>
                        )}
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-1 border-bottom"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 bg-green-100 rounded-b-3xl">
                <div className="col-span-1 lg:col-span-1"></div>
                <div className="col-span-1 lg:col-span-10 border-left border-right">
                    <div className="flex items-center justify-center py-10">
                        Slider with Active Next and Prev Buttons
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-1"></div>
            </div>
        </div>
    );
};

export default Carousel