"use client"

import React, { useState } from 'react';
import './PhotoSlider.css'; // Ensure to create this CSS file for styling

// Array of image URLs

const PhotoSlider = ({images }:{images:string[]}) => {
    if(!images){
        return(
            <></>
        )
    }
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="slider-container">
            <button onClick={goToPrevious} className="prev-button">❮</button>
            <div className="image-container">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image" />
            </div>
            <button onClick={goToNext} className="next-button">❯</button>
        </div>
    );
};

export default PhotoSlider;
