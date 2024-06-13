"use client"

import Image from "next/image";
import FionaIcon from "@/app/components/FionaIcon"
import GitHubIcon from "@/app/components/GitHubIcon"
import LinkedInIcon from "@/app/components/LinkedInIcon"
import Buttons from "@/app/components/Buttons"
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

import { useState, useEffect } from "react"

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSnowPreset } from "tsparticles-preset-snow";
import { loadImageShape } from "tsparticles-shape-image";


export default function Home() {

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSnowPreset(engine);
    await loadImageShape(engine);
    }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  const size = useWindowSize();

  return (
    <main className="w-screen h-screen bg-white flex relative">
      <Particles
            className="absolute Z-50"
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                interactivity: {
                    events: {
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#FFE4E6"
                    },
                    move: {
                        direction: "bottom",
                        enable: true,
                        outModes: {
                            default: "out",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 10000,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 25, max: 45 },
                    },
                    zIndex: 0,
                },
                detectRetina: true,
            }}
        />

      <div className="m-auto w-red-200 w-4/5 justify-center z-10">
        {/*<p>{size.width}</p>*/}
        <div className={size.width < 1000 ? "flex-col text-black" : "flex text-black"}>

          <div className={size.width < 1000 ? "w-32 pt-32 flex justify-center mx-auto" : "w-64 flex justify-center mx-auto"}>
            <div className=" w-64">
              <div className="flex justify-center m-auto hover:scale-110 transition duration-300"><FionaIcon /></div>

              <div className={size.width < 1000 ? "py-2 px-8 flex justify-between" : "py-12 px-8 flex justify-between"}>
                <GitHubIcon /> 
                <LinkedInIcon />
              </div>
            </div>
          </div>

          <div className="flex-col justify-center ">
            <h1 className={size.width < 1000 ? " text-4xl py-4 px-8 text-center font-extrabold" : " text-6xl py-4 px-8 text-center font-extrabold"}>Tansima Kamal Fiana</h1>
            <h3 className={size.width < 1000 ? " text-xl px-8 flex justify-center text-center font-poppinsThin" : " text-4xl px-8 flex justify-center text-center font-poppinsThin"}>Hi, I&apos;m Fiona! I&apos;m a recent grad with a love for web development, UI/UX design, and solving problems. I enjoy crafting digital experiences that are both intuitive and visually appealing, aiming to make a real impact.</h3>
            
            <div className="flex w-full justify-evenly m-auto py-8 px-24">
              <Buttons text="PORTFOLIO" href="../pages/PortfolioPage" bgcolor="hover:bg-[#ffee32]" className={size < 1000 ? "text-xl p-2" : "text-2xl p-2"}/>
              <Buttons text="RESUME" href="../pages/ResumePage" bgcolor="hover:bg-[#f77f00]" className={size < 1000 ? "text-xl p-2" : "text-2xl p-2"}/>
              <Buttons text="CONTACT" href="../pages/ContactPage" bgcolor="hover:bg-[#ED4672]" className={size < 1000 ? "text-xl p-2" : "text-2xl p-2"}/>
            </div>
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