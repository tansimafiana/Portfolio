"use client"

import Image from "next/image";
import GitHubIcon from "@/app/components/GitHubIcon"
import BackButton from "@/app/components/BackToTopButton"

import Navigation from "@/app/navigation/page"
import { useState, useEffect } from "react"

export default function PersonalPortfolioPage() {
  const scrollY = useScroll();
  const size = useWindowSize();

  const activeTabClass = "py-4 px-8 bg-pink-50 rounded-t-lg "
  const inactiveTabClass = "py-4 px-8 bg-rose-100 rounded-t-lg hover:bg-rose-50 "


  return (
    <main className="bg-rose-100 text-black my-auto flex-col flex flex-wrap ">
      <Navigation id="Navbar" subpage={false} />
      { scrollY > 500 &&
      <div className={"transition duration-500 opacity-100"}>
        <BackButton url="#Navbar" />
      </div>}

      <div className="w-screen bg-pink-50 flex-col pb-12">
        <div className="w-10/12 h-full flex flex-col justify-center items-center mx-auto font-light">
          {/* Logo */}
          <div className="flex pt-12 justify-center w-full">
            <h1 className=" mx-auto text-5xl pt-2 text-[#1a1a53]">🌸 | Portfolio</h1>
            <div className=" my-auto">
              <GitHubIcon url="https://github.com/tansimafiana/Portfolio" />
            </div>
          </div>

          {/* Slide 1 */}
          <div className="flex flex-col pt-20 w-full">
            <h2 className="text-3xl text-center pb-6">Introduction</h2>
            <p>Hello, my name is Tansima Kamal Fiana, and I am a recent graduate of Software Development from Southern Alberta Institute of Technology. I am currently working on my portfolio to showcase some of my projects that I have done.</p>
          </div>

          {/* Slide 2 */}
          <div className="flex flex-col pt-20 w-full space-y-6">
            <h2 className="text-3xl text-center">Overview</h2>
            <p>Welcome to Tansima Kamal Fiana&apos;s Creative Corner!

Here, whimsy meets innovation, and imagination knows no bounds. As a Software Developer, I&apos;ve curated a collection of my finest works to share with you. From captivating illustrations to meticulously crafted designs, each piece embodies my dedication to creativity and excellence.

Dive into my portfolio and explore a world where every pixel tells a story, where colors dance and concepts come to life. Whether you&apos;re seeking inspiration, collaboration, or simply a glimpse into my creative journey, you&apos;ll find it all here.

So, grab a cup of creativity, take a stroll through my website, and let&apos;s embark on this artistic adventure together!</p>
            
          </div>

          {/* Slide 3 */}
          <div className="flex flex-col pt-20 w-full space-y-6">
            <h2 className="text-3xl text-center">Tech Stack</h2>
            <p>Crafted with React.js and Tailwind CSS, my portfolio website combines the power of modern web development with sleek design aesthetics. Utilizing React.js, I&apos;ve brought dynamic interactivity to every corner of the site, ensuring seamless navigation and a user-friendly experience. Meanwhile, Tailwind CSS lends its versatility and efficiency, allowing for beautifully crafted UI components and effortless responsiveness across devices.

With this powerful tech stack, I&apos;ve created a platform that not only showcases my creative endeavors but also reflects my commitment to cutting-edge technology and design excellence. Explore with ease, indulge in the visual feast, and witness the magic of React.js and Tailwind CSS in action.</p>
           
          </div>

         

          {/* Slide 4 */}
          <div className="flex flex-col pt-20 w-full space-y-6">
            <h2 className="text-3xl text-center"> Features</h2>
           

 <p>🌸 Back to Top Button: Never lose your place in the creative landscape with the convenient &apos;Back to Top&apos; button. Effortlessly navigate through my portfolio and return to the beginning with just a click, ensuring seamless browsing from start to finish.</p>

<p>🌸 Interactive Tabs: Dive deeper into my diverse range of projects with interactive tabs. Organized for ease of exploration, these tabs allow you to effortlessly switch between categories, unveiling a treasure trove of creativity with each selection.</p>

<p>🌸 Dynamic Animations: Experience the magic of motion as dynamic animations breathe life into every corner of the website. From subtle fades to captivating transitions, these animations add an extra layer of engagement, ensuring your journey through my portfolio is nothing short of mesmerizing.</p>

<p>🌸 Responsive Design: Explore my portfolio with confidence on any device, thanks to its responsive design. Whether you&apos;re browsing on a desktop, tablet, or smartphone, you&apos;ll enjoy a seamless and visually stunning experience tailored to your screen size.</p>

<p>🌸 Interactive Elements: Engage with captivating interactive elements sprinkled throughout the site. From hover effects that reveal hidden details to clickable elements that invite exploration, these interactive features ensure that every visit to my portfolio is an immersive adventure.</p>

<p>🌸 Seamless Navigation: Navigate effortlessly through my portfolio with intuitive controls and smooth transitions. Whether you&apos;re scrolling through projects or toggling between tabs, seamless navigation ensures that nothing stands between you and the captivating content waiting to be discovered.</p>


            
            
            
          </div>
          {/* Slide 6 */}
          <div className="flex flex-col pt-20 w-full space-y-6">
            <h2 className="text-3xl text-center">Conclusion</h2>
            <p>Take a stroll through my portfolio, where each piece reflects a chapter of my creative journey. I invite you to reflect on your own path as you explore. Connect with me to share your thoughts, offer feedback, or simply chat about creativity. Let&apos;s embark on this journey together. Thank you for visiting!</p>
                        
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