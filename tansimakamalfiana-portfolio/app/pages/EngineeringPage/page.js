"use client"

import Image from "next/image";
import FionaIcon from "@/app/components/FionaIcon"
import GitHubIcon from "@/app/components/GitHubIcon"
import LinkedInIcon from "@/app/components/LinkedInIcon"
import Buttons from "@/app/components/Buttons"
import { IoMdHome } from "react-icons/io";
import BackButton from "@/app/components/BackToTopButton"

import Navigation from "@/app/navigation/page"
import { useState, useEffect } from "react"

export default function EngineeringPage() {
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
            
            <h1 className=" text-5xl pt-2 text-[#1a1a53]">Automated Storage Retrieval System</h1>
          </div>

          {/* Slide 1 */}
          <div className="flex flex-col pt-20 w-full">
            <h2 className="text-3xl text-center pb-6">Introduction</h2>
            <p>Hi there! I am Tansima Kamal Fiana, currently in my final semester of studying Software Development at SAIT. Recently, a friend from SAIT&apos;s Mechanical Engineering program approached me about collaborating on a project. Initially, I didn&apos;t give it much thought, but when they explained that it involved using a robot to pick and place items from a storage system onto a conveyor line using an ABB IRB140 Robot Arm, I was intrigued. The communication systems for the robots utilize PLCs, so I felt that my project management and UX skills could be of great help. And thus began my journey delving into the world of engineers!</p>
          </div>

          {/* Slide 2 */}
          <div className="flex flex-col pt-20 w-full space-y-6">
            <h2 className="text-3xl text-center">Problem Statement </h2>
            <p>This project aims to properly integrate the ASRS system with the IRB 140 work-cell to 
transport and store raw material in storage trays, while meeting existing safety 
requirements. They collaborated with other capstone teams, they will integrate the use of the 
Lab AGV and storage of cartridges containing raw material into the ecosystem.
The client has requested the team to update the functionality of the ASRS 
system, so that it integrates and effectively communicates with the IRB 140 work-cell.
The goal of the project is to simulate warehouse material transportation and inventory 
storage systems.</p>
           
          </div>

         

          {/* Slide 4 */}
          <div className="flex flex-col pt-20 w-full space-y-6">
            <h2 className="text-3xl text-center">Objective Tree</h2>
            
            <div className="flex justify-center w-11/12 mx-auto"><Image alt="srsc" className="justify-center flex" src="/Capture.PNG" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
          </div>

       

          {/* Slide 6 */}
          <div className="flex flex-col pt-20 w-full space-y-6">
            <h2 className="text-3xl text-center">Contribution</h2>
            <p>I have created a Figma design for the user interface (UI) of the HMI (Human-Machine Interface) for the ASRS project. The UI is intended to guide the user through each function screen, such as operating the robot or accessing the settings. They are using GX Designer to code the frontend UI of the HMI and asked me if I could come up with a user-friendly Figma UX for them to reference. At first, I had no clue what they were talking about, but when they explained it to me, I started sketching some low-fidelity prototypes as they explained.</p>
                     
          </div>

          {/* Slide 7 */}
          <div className="flex flex-col pt-20 w-full space-y-6">
            <h2 className="text-3xl text-center"> Review 1</h2>
            <div className="flex justify-center w-11/12 mx-auto"><Image alt="srsl" className="justify-center flex" src="/lofip.jpeg" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
            <div className="flex justify-center w-11/12 mx-auto"><Image alt="srs2" className="justify-center flex" src="/lofip2.jpeg" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
          </div>



          {/* Slide 8 */}
          <div className="flex flex-col pt-20 w-full space-y-6">
            <h2 className="text-3xl text-center">Redesign Process</h2>
            <p>I managed to transform those initial low-fidelity prototypes into high-fidelity designs. Incorporating both their guidance and some of my own ideas, I refined the UI to be even more user-friendly and efficient. These Figma prototypes now serve as comprehensive guides for the GX Designer coding process, ensuring that the frontend UI of the HMI meets both functionality and usability standards. I still have a few pages left to design, and I&apos;m currently working on them. Stay tuned for the updates!</p>
            <div className="flex justify-center w-11/12 mx-auto"><Image alt="srs4" className="justify-center flex" src="/HMI 11_ - Home Page.png" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
            <div className="flex justify-center w-11/12 mx-auto"><Image alt="srs5" className="justify-center flex" src="/HMI 11_ - Auto Page.png" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
            <div className="flex justify-center w-11/12 mx-auto"><Image alt="srs6" className="justify-center flex" src="/HMI 11_ - Manual Page.png" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
          </div>

 {/* Slide 6 */}
 <div className="flex flex-col pt-20 w-full space-y-6">
            <h2 className="text-3xl text-center">Conclusion</h2>
            
              <p>This collaborative journey has been both challenging and rewarding. Designing for something outside of my degree field proved to be both a challenge and a delight. It pushed me to think outside of my comfort zone and explore new concepts. Through teamwork and perseverance, we&apos;ve crafted a user-friendly interface that meets the needs of our project. As I continue to work on the remaining pages, I&apos;m excited to see the final product come together. Stay tuned for more updates on our progress!</p>       
          </div>
        </div>
      </div>
    </main>
  );
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
