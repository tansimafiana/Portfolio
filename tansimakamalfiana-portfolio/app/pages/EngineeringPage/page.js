"use client"

import Image from "next/image";
import FionaIcon from "@/app/components/FionaIcon"
import GitHubIcon from "@/app/components/GitHubIcon"
import LinkedInIcon from "@/app/components/LinkedInIcon"
import Buttons from "@/app/components/Buttons"
import { IoMdHome } from "react-icons/io";
import BackButton from "@/app/components/BackToTopButton"
import PieChart from "@/app/components/PieChart";

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
    <main className="bg-white text-black my-auto flex-col flex flex-wrap ">
      <Navigation id="Navbar" subpage={false} />
      { scrollY > 500 &&
      <div className={"transition duration-500 opacity-100"}>
        <BackButton url="#Navbar" />
      </div>}

      {/* First Page */}
      <div className="w-screen bg-white flex-col pb-12">
        <div className="w-10/12 h-full flex flex-col justify-center items-center mx-auto font-light">
          {/* Logo */}

          {/* Opening Picture */}
          <div className="w-full mt-8 mb-8 relative">
            <Image src="/HMIOpening.png"
                   alt="Opening Image Background"
                   width="1920"
                   height="1080"
                   unoptimized={true}
                   className="" />
          </div>
        </div>
      </div>

      {/* Second Page */}
      <div className="bg-[#e4f7ff] h-fit w-screen pb-20">
        <div className="w-8/12 mx-auto">
          <h1 className="text-4xl pt-16 font-bold">Project Overview</h1>
          <p className=" text-xl pt-12">A friend from SAIT&apos;s Mechanical Engineering program approached me about collaborating on a project. Initially, I didn&apos;t give it much thought, but when they explained that it involved using a robot to pick and place items from a storage system onto a conveyor line using an ABB IRB140 Robot Arm, I was intrigued. The communication systems for the robots utilize PLCs, so I felt that my project management and UX skills could be of great help. And thus began my journey delving into the world of engineers!</p>
        </div>
      </div>

      <div className="bg-white h-fit w-screen pb-20">
        <div className="w-8/12 mx-auto">
          <h1 className="text-4xl pt-16 font-bold">Project Statement</h1>
          <p className=" text-xl pt-12">This project aims to properly integrate the ASRS system with the IRB 140 work-cell to 
transport and store raw material in storage trays, while meeting existing safety 
requirements. They collaborated with other capstone teams, they will integrate the use of the 
Lab AGV and storage of cartridges containing raw material into the ecosystem.
The client has requested the team to update the functionality of the ASRS 
system, so that it integrates and effectively communicates with the IRB 140 work-cell.
The goal of the project is to simulate warehouse material transportation and inventory 
storage systems.</p>
        </div>
      </div>

      <div className="bg-[#e4f7ff] h-fit w-screen pb-20">
        <div className="w-8/12 mx-auto">
          <h1 className="text-4xl pt-16 font-bold">Objective Tree</h1>
          <p className=" text-xl pt-12"></p>
          <div className="mt-16" />
          <PieChart src="/Capture.PNG" width="1312" height="737" className=" w-[80%] mx-auto flex justify-center rounded-xl shadow-lg " bgcolor={" bg-[#fff1f2] "} full={true}/>
        </div>
      </div>

      <div className="bg-white h-fit w-screen pb-20">
        <div className="w-8/12 mx-auto">
          <h1 className="text-4xl pt-16 font-bold">Contribution</h1>
          <p className=" text-xl pt-12">I have created a Figma design for the user interface (UI) of the HMI (Human-Machine Interface) for the ASRS project. The UI is intended to guide the user through each function screen, such as operating the robot or accessing the settings. They are using GX Designer to code the frontend UI of the HMI and asked me if I could come up with a user-friendly Figma UX for them to reference. At first, I had no clue what they were talking about, but when they explained it to me, I started sketching some low-fidelity prototypes as they explained.</p>
        </div>
      </div>
      
      <div className="bg-[#e4f7ff] h-fit w-screen pb-20">
        <div className="w-8/12 mx-auto">
          <h1 className="text-4xl pt-16 font-bold">Review 1</h1>
          
          <div className="space-x-6 flex mt-16">
            <PieChart src="/lofip.jpeg" width="2000" height="1126" className=" w-[80%] mx-auto " bgcolor={" bg-[#fff1f2] "} />
            <PieChart src="/lofip2.jpeg" width="1088" height="1091" className=" w-[80%] mx-auto " bgcolor={" bg-[#fff1f2] "} />
          </div>
        </div>
      </div>

      <div className="bg-white h-fit w-screen pb-20">
        <div className="w-8/12 mx-auto">
          <h1 className="text-4xl pt-16 font-bold">Redesign Process</h1>
          <p className=" text-xl pt-12">I managed to transform those initial low-fidelity prototypes into high-fidelity designs. Incorporating both their guidance and some of my own ideas, I refined the UI to be even more user-friendly and efficient. These Figma prototypes now serve as comprehensive guides for the GX Designer coding process, ensuring that the frontend UI of the HMI meets both functionality and usability standards.</p>
        
          <div  className="mt-12"/>

          <p className="text-xl mb-8 ">The Emergency Stop (E-Stop), Motors, and Manual LED buttons change colour based on their external inputs. The user is also able to toggle the state of the manual or automatic process or the power going to the motors with ease from the HMI screen.</p>
          <div className="flex ">
            <div className="w-2/3">
              <PieChart src="/gifhmihomepGE.gif" width="1342" height="838" className=" w-full mx-auto pl-2 " bgcolor={" bg-[#fff1f2] "} />
            </div>
            <div className="flex flex-col w-[34.666666%]">
              <PieChart src="/gifhmi1.gif" width="1402" height="838" className=" h-1/2 mx-auto pl-2 " bgcolor={" bg-[#fff1f2] "} />
              <PieChart src="/gifhmi2.gif" width="1402" height="838" className=" h-1/2 mx-auto pl-2 " bgcolor={" bg-[#fff1f2] "} />
            </div>
          </div>

          <h2 className="text-xl font-bold  mt-12">Home Page</h2>
          <p className="text-xl mb-8 ">The Home Page shows the first thing a new user should see upon booting up the HMI system. There are lights that change colour base on their status of being on or off. The status of these indicators may be externally changed and it is important to have that information in front of the user at most times.</p>
          <PieChart src="/HomePage.png" width="1194" height="834" className=" w-[70%] mx-auto pl-2 " bgcolor={" bg-[#fff1f2] "} />
          
          <h2 className="text-xl font-bold  mt-12">Auto Page</h2>
          <p className="text-xl mb-8 ">In this page the user can toggle the state of both the motors and the automatic robot function.</p>
          <PieChart src="/autopage.png" width="1194" height="834" className=" w-[70%] mx-auto pl-2 " bgcolor={" bg-[#fff1f2] "} />
          
          <h2 className="text-xl font-bold  mt-12">Manual Page</h2>
          <p className="text-xl mb-8 ">This page is similar to the Auto page except the function of the robot is slower and can be used for testing.</p>
          <div className="flex">
            <PieChart src="/Manual page.png" width="1194" height="834" className=" w-[70%] mx-auto pl-2 " bgcolor={" bg-[#fff1f2] "} />
          </div>

          <h2 className="text-xl font-bold  mt-12">Signed In User Page</h2>
          <p className="text-xl mb-8 ">Displays the current user and session details.</p>
          <PieChart src="/userpage - signed in.png" width="1194" height="834" className=" w-[70%] mx-auto pl-2 " bgcolor={" bg-[#fff1f2] "} />
          
          <h2 className="text-xl font-bold  mt-12">Signed Out User Page</h2>
          <p className="text-xl mb-8 ">Prompts the user to log into an account.</p>
          <PieChart src="/userpage - signed out.png" width="1194" height="834" className=" w-[70%] mx-auto pl-2 " bgcolor={" bg-[#fff1f2] "} />
          
          <h2 className="text-xl font-bold  mt-12">Logistics Page</h2>
          <p className="text-xl mb-8 ">Shows logistics of the operation of the system. Useful for maintenance.</p>
          <PieChart src="/logistics page.png" width="1194" height="834" className=" w-[70%] mx-auto pl-2 " bgcolor={" bg-[#fff1f2] "} />
        </div>
      </div>

      <div className="bg-[#e4f7ff] h-fit w-screen pb-20">
        <div className="w-8/12 mx-auto">
          <h1 className="text-4xl pt-16 font-bold">Conclusion</h1>
          <p className=" text-xl pt-12">This collaborative journey has been both challenging and rewarding. Designing for something outside of my degree field proved to be both a challenge and a delight. It pushed me to think outside of my comfort zone and explore new concepts. Through teamwork and perseverance, we&apos;ve crafted a user-friendly interface that meets the needs of our project. As I continue to work on the remaining pages, I&apos;m excited to see the final product come together. Stay tuned for more updates on our progress!</p>
          
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
