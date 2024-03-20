"use client"

import React from 'react';
import { Slide } from 'react-slideshow-image';
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import 'react-slideshow-image/dist/styles.css';
//import './styles.css';

const Slideshow = ({slideData}) => {
  const size = useWindowSize();

    const slideImages = [
      { src: "/Landscape.png"},
      { src: "/FionaPFP.jpg"},
      ];

      const spanStyle = {
        padding: '20px',
        background: '#efefef',
        color: '#000000'
      }
      
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: 'full'
      }

    return (
        <div className="slide-container">
        <Slide autoplay={false} transitionDuration={800}>
         {slideData && slideData.map((slide, index)=> (
            <div className="h-full justify-center" key={index}>
              {slide}
            </div>
          ))} 
        </Slide>
      </div>
    );
};

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
     
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default Slideshow;