"use client"

import Image from "next/image";
import BackButton from "@/app/components/BackToTopButton"

import Navigation from "@/app/navigation/page"
import { useState, useEffect } from "react"

export default function GameDevPage() {
  const size = useWindowSize()
  const scrollY = useScroll();

  const stretchedWindowClass = ["w-10/12 h-full flex justify-center mx-auto font-light",
                                "h-full",
                                "h-full pl-8 ml-4 mx-auto w-4/5"]
  const slimWindowClass = ["w-10/12 h-full flex flex-wrap justify-center mx-auto font-light",
                           "h-full",
                           "h-full mt-6 mx-auto w-full"]

  return (
    <main className="bg-rose-100 text-black my-auto flex-col flex flex-wrap ">
      <Navigation subpage={false} />
      { scrollY > 500 &&
      <div className={"transition duration-500 opacity-100"}>
        <BackButton url="#Navbar" />
      </div>}

      <div className="w-screen bg-pink-50 flex-col pb-12">

        
        <div className="w-10/12 h-full flex flex-col justify-center items-center mx-auto font-light">
          {/* Logo */}
          <div className="flex pt-12">
            
            <h1 className=" text-5xl pt-2 text-[#1a1a53]"> Game Development</h1>
          </div>


          {/* Slide 2 */}
          <div className="flex flex-col pt-20 w-full space-y-6">
            <h2 className="text-3xl text-center">Introduction</h2>
            <p>Ever wondered what it is like to dive into the world of game development? Well, let me tell you about my adventure with an indie story mode game called Zomboid! My friend had this awesome idea for a game, and I could not resist jumping in to help bring it to life. Using 3D modeling tools, I unleashed my creativity to design layouts, characters, cosmetics, weapons, and all sorts of cool objects for the game. It was like being a mad scientist in a virtual laboratory, crafting the perfect elements to make the game pop! From brainstorming sessions to late-night modeling marathons, this project was an exhilarating ride filled with fun and creativity. And the best part? Seeing our ideas come to life in the game was an absolute thrill!</p>
          </div>

          {/* Slide 3 */}
          <div className="flex flex-col pt-20 w-full space-y-6">
            <h2 className="text-3xl text-center">Contribution</h2>
          <p>Mapping the 2D images from Photoshop onto a 3D model was quite a fascinating experience for me. Blender played a significant role in this process, allowing me to integrate these textured images onto the 3D model. With Blender real-time updates I could instantly see how my changes affected the model giving me a sense of satisfaction and accomplishment. This dynamic platform not only made the process more efficient but also enhanced my creativity by providing immediate feedback. Overall combining Photoshop and Blender opened up new possibilities for me in 3D design allowing me to bring my ideas to life in ways I had not imagined before. It was a bit challenging to learn at first but once I figured it out it was so much fun!</p>
          </div>

          {/* Slide 4 */}
          <div className="flex flex-col pt-20 w-full space-y-6">
            <h2 className="text-3xl text-center">Design Process 1</h2>
            
            
            <div className="flex justify-center w-full mx-auto"><Image alt="zom1" className="justify-center flex" src="/WhatsApp Image 2024-03-20 at 7.23.47 PM.jpeg" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
           
            
            <div className="flex justify-center w-full mx-auto"><Image alt="zom4" className="justify-center flex" src="/WhatsApp Image 2024-03-20 at 7.23.48 PM (2).jpeg" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
            <div className="flex justify-center w-full mx-auto"><Image alt="zom5" className="justify-center flex" src="/WhatsApp Image 2024-03-20 at 7.23.48 PM.jpeg" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
            <div className="flex justify-center w-full mx-auto"><Image alt="zom6" className="justify-center flex" src="/WhatsApp Image 2024-03-20 at 7.23.49 PM.jpeg" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
            <div className="flex justify-center w-full mx-auto"><Image alt="zom7" className="justify-center flex" src="/WhatsApp Image 2024-03-20 at 7.23.50 PM (1).jpeg" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
            <div className="flex justify-center w-full mx-auto"><Image alt="zom8" className="justify-center flex" src="/WhatsApp Image 2024-03-20 at 7.23.50 PM (2).jpeg" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
            <div className="flex justify-center w-full mx-auto"><Image alt="zom9" className="justify-center flex" src="/WhatsApp Image 2024-03-20 at 7.23.50 PM.jpeg" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
            <div className="flex justify-center w-full mx-auto"><Image alt="zom9" className="justify-center flex" src="/WhatsApp Image 2024-03-20 at 7.23.51 PM.jpeg" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
              
         
         
          </div>





         

          {/* Slide 6 */}
          <div className="flex flex-col pt-20 w-full space-y-6">
            <h2 className="text-3xl text-center">Redesign Process</h2>
             
           
           
            
            <div className="flex justify-center w-full mx-auto"><Image alt="asset24" className="justify-center flex" src="/WhatsApp Image 2024-03-20 at 4.57.31 AM (1).jpeg" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
            <div className="flex justify-center w-full mx-auto"><Image alt="ass3" className="justify-center flex" src="/WhatsApp Image 2024-03-20 at 7.23.48 PM.jpeg" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
            <div className="flex justify-center w-full mx-auto"><Image alt="ass4" className="justify-center flex" src="/WhatsApp Image 2024-03-20 at 7.23.49 PM.jpeg" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
            <div className="flex justify-center w-full mx-auto"><Image alt="ass5" className="justify-center flex" src="/WhatsApp Image 2024-03-20 at 7.23.50 PM (1).jpeg" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
            <div className="flex justify-center w-full mx-auto"><Image alt="ass6" className="justify-center flex" src="/WhatsApp Image 2024-03-20 at 7.23.50 PM (2).jpeg" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
            <div className="flex justify-center w-full mx-auto"><Image alt="ass7" className="justify-center flex" src="/WhatsApp Image 2024-03-20 at 7.23.50 PM.jpeg" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
            <div className="flex justify-center w-full mx-auto"><Image alt="ass8" className="justify-center flex" src="/WhatsApp Image 2024-03-20 at 7.23.51 PM.jpeg" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>           
          </div>

          {/* Slide 7 */}
          <div className="flex flex-col pt-20 w-full space-y-6">
            <h2 className="text-3xl text-center"> Conclusion</h2>
            <p>Special thanks to Sara Al-Seaidy, Solution Expert at Cyferd, for her guidance throughout this project. Her support has been invaluable in bringing this idea to life. </p>
          </div>

         
        </div>
      </div>
    </main>
  );
}

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

function useScroll() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    // Add event listener
    window.addEventListener("scroll", handleScroll);
     
    // Call handler right away so state gets updated with initial window size
    handleScroll();
    
    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
    }, []); // Empty array ensures that effect is only run on mount
  return scrollY;
}
