"use client"

import Image from "next/image";
import GitHubIcon from "@/app/components/GitHubIcon"
import BackButton from "@/app/components/BackToTopButton"
import PieChart from "@/app/components/PieChart";

import Navigation from "@/app/navigation/page"
import { useState, useEffect } from "react"

export default function QuickConstructPage() {
  const scrollY = useScroll();
  const size = useWindowSize();

  const activeTabClass = "py-4 px-8 bg-pink-50 rounded-t-lg "
  const inactiveTabClass = "py-4 px-8 bg-rose-100 rounded-t-lg hover:bg-rose-50 "
  const [groupActive, setGroupActive] = useState([true, false])

  

  return (
    <main className="bg-white text-black my-auto flex-col flex flex-wrap ">
      <Navigation id="Navbar" subpage={false} />
      { scrollY > 500 &&
      <div className={"transition duration-500 opacity-100"}>
        <BackButton url="#Navbar" />
      </div>}

      {/* First Page */}
      <div className="w-screen bg-white flex-col pb-20">
        <div className="w-10/12 h-full flex flex-col justify-center items-center mx-auto font-light">
          {/* Logo */}

          {/* Opening Picture */}
          <div className="w-full mt-8 mb-8 relative">
            <Image src="/OpeningImage.png"
                   alt="Opening Image Background"
                   width="1920"
                   height="1080"
                   unoptimized={true}
                   className="" />
          </div>
        </div>
      </div>

      {/* Second Page */}
      <div className="bg-rose-50 h-fit w-screen pb-20">
        <div className="w-8/12 mx-auto">
          <h1 className="text-6xl pt-20 font-bold">Research</h1>
          <h2 className=" text-4xl pt-12">User Interviews/Survey</h2>
          <p className=" text-2xl pt-12">My research process is guided by design principles to kick off the research, I began by creating a survey and conducting user interviews. By collecting qualitative and quantitative data, I aimed to build a solid foundation for the rest of the design process. The survey was completed by 8 participants, and here are some of the key insights we gathered from their responses: </p>
        
          <div className="mt-16 mb-20" />
          <div className="flex mx-auto justify-center">
            <PieChart src="/Piechart1.png" className="w-[400px] h-[400px] mr-12" />
            <PieChart src="/Piechart2.png" className="w-[400px] h-[400px] ml-12" />
          </div>
          <div className="flex mx-auto justify-center">
            <PieChart src="/Piechart3.png" className="" />
          </div>
        </div>
      </div>

      {/* Third Page */}
      <div className="bg-[#240046] h-fit w-screen text-white pb-20">
        <div className="w-8/12 mx-auto">
          <h1 className="text-6xl pt-20 font-bold">Getting a clearer picture on the direction</h1>
          <h2 className=" text-4xl pt-12">Competitive Analysis</h2>
          <p className=" text-2xl pt-12">After looking at the results from my survey, I have discovered that people Excel and a simple phone calendar are the most popular used platforms used by the following users. I conducted a competitive analysis to see what were the strengths and weak points of the platforms.</p>
          <div className="mt-16 mb-20" />

          <PieChart src="/EngineerTable.png" width="1920" height="1080" className=" w-[80%] mx-auto " bgcolor={" bg-[#240046] "} />
        </div>
      </div>

      {/* Fourth Page */}
      <div className="bg-rose-50 h-fit w-screen pb-20">
        <div className="w-8/12 mx-auto">
          <h1 className="text-6xl pt-20 font-bold">Personas</h1>
          <h2 className=" text-4xl pt-12">From the survey that I have conducted, I created two personas.</h2>
          <p className=" text-2xl pt-12">Since there was no working product at the time, most descriptions are hypothetical situations based on interviews conducted on possible users.</p>
        
          <div className="mt-16 mb-20" />
          <div className="flex mx-auto justify-center">
            <div className="">

            </div>
          </div>
          <div className="flex flex-col mx-auto justify-center">
            <div className="size-fit p-16">
              <PieChart src="/EngineeringCards.png" width="1920" height="1080" className=" w-[80%] mx-auto" bgcolor={" bg-[#fff1f2] "} />
            </div>
            <div className=" flex justify-between mx-auto space-x-12 mt-6">
              <PieChart src="/Stickers1.png" width="2880" height="2104" className=" w-[100%] mx-auto " bgcolor={" bg-[#fff1f2] "} />
              <PieChart src="/Stickers2.png" width="2880" height="2104" className=" w-[100%] mx-auto " bgcolor={" bg-[#fff1f2] "} />
            </div>  
          </div>
        </div>
      </div>

      {/* Fifth Page */}
      <div className="bg-white h-fit w-screen pb-20">
        <div className="w-8/12 mx-auto">
          <h1 className="text-6xl pt-20 font-bold">User Story</h1>
          <p className=" text-2xl pt-12">After identifying the users, I have created User Stories. The User Stories can be found here: <a href="https://mysait-my.sharepoint.com/personal/tansima_fiana_edu_sait_ca/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ftansima%5Ffiana%5Fedu%5Fsait%5Fca%2FDocuments%2Fuserstory%2Epdf&parent=%2Fpersonal%2Ftansima%5Ffiana%5Fedu%5Fsait%5Fca%2FDocuments" className="text-purple-800 underline" target="_blank">link</a></p>
        
          <h1 className="text-6xl pt-16 mt-8 font-bold">User Flow Chart</h1>
          <p className=" text-2xl pt-12 mb-16">After creating the user story, I focused on creating the User Flow Chart. This has helped me understand how all the pages connect throughout the app. You can find all the User Flow Charts here: <a href="https://mysait-my.sharepoint.com/personal/tansima_fiana_edu_sait_ca/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ftansima%5Ffiana%5Fedu%5Fsait%5Fca%2FDocuments%2FresourceProvider%2Eashx%2Epdf&parent=%2Fpersonal%2Ftansima%5Ffiana%5Fedu%5Fsait%5Fca%2FDocuments" className="text-purple-800 underline" target="_blank">link</a></p>

          <PieChart src="/UserFlow.png" width="1621" height="747" className=" w-[80%] mx-auto " bgcolor={" bg-[#fff1f2] "} />
          <div className="mt-16 mb-20" />
          <div className="flex mx-auto justify-center">
            <div className="">

            </div>
          </div>
          
        </div>
      </div>

      {/* Sixth Page */}
      <div className="bg-[#240046] h-fit w-screen text-white pb-20">
        <div className="w-8/12 mx-auto">
          <h1 className="text-6xl pt-20 font-bold">Lofi Designs and Wireframe</h1>
          <p className=" text-2xl pt-12">I created a lofi wireframe of how the app would look and annotated around the sketches.</p>
          <div className="mt-16 mb-20" />

          <div className=" flex justify-between mx-auto space-x-12 mt-6">
            <PieChart src="/Lofi1.png" width="2206" height="1404" className=" w-[100%] mx-auto " bgcolor={" bg-[#240046] "} />
            <PieChart src="/Lofi2.png" width="2206" height="1404" className=" w-[100%] mx-auto " bgcolor={" bg-[#240046] "} />
          </div>
          <div className=" flex justify-between mx-auto space-x-12 mt-6">
            <PieChart src="/Userselectscreen (1).png" width="2206" height="1404" className=" w-[100%] mx-auto " bgcolor={" bg-[#240046] "} />
            <PieChart src="/Sign up Page (1).png" width="2206" height="1404" className=" w-[100%] mx-auto " bgcolor={" bg-[#240046] "} />
          </div>
          <div className=" flex justify-between mx-auto space-x-12 mt-6">
            <PieChart src="/Screen 1 (2).png" width="2206" height="1404" className=" w-[100%] mx-auto " bgcolor={" bg-[#240046] "} />
            <PieChart src="/Dashboard (2).png" width="2206" height="1404" className=" w-[100%] mx-auto " bgcolor={" bg-[#240046] "} />
          </div>
          <div className=" flex justify-between mx-auto space-x-12 mt-6">
            <PieChart src="/calendar (1).png" width="2206" height="1404" className=" w-[100%] mx-auto " bgcolor={" bg-[#240046] "} />
            <PieChart src="/Message page (1).png" width="2206" height="1404" className=" w-[100%] mx-auto " bgcolor={" bg-[#240046] "} />
          </div>
          <div className=" flex justify-between mx-auto space-x-12 mt-6">
            <PieChart src="/MeetingPage (1).png" width="2206" height="1404" className=" w-[100%] mx-auto " bgcolor={" bg-[#240046] "} />
            <PieChart src="/Profile page (1).png" width="2206" height="1404" className=" w-[100%] mx-auto " bgcolor={" bg-[#240046] "} />
          </div>
        </div>
      </div>

      {/* Seventh Page */}
      <div className="bg-rose-50 h-hit w-screen pb-20">
        <div className="w-8/12 mx-auto">
          <h1 className="text-6xl pt-20 font-bold">Style Guide</h1>
          <p className=" text-2xl pt-12">Before creating the final mockups I created a style guide to help me keep organized during the design phase.</p>
        
          <div className="mt-16 mb-20" />

          <PieChart src="/Inter.png" width="1280" height="640" className=" w-[70%] mx-auto " bgcolor={" bg-[#fff1f2] "} />
        </div>
      </div>

      {/* Eighth Page */}
      <div className="bg-white h-fit w-screen pb-20">
        <div className="w-8/12 mx-auto">
          <h1 className="text-6xl pt-20 font-bold">Final UI Mockups</h1>
          <p className=" text-2xl pt-12">The dashboard and calendar are the main features of QuickConstruct. Users can easily add, edit, and track their projects, with each project having its own dedicated dashboard. The calendar allows users to effortlessly add new events, schedule appointments, and set up to-do lists, all on one screen, without any complications.</p>
          
          <div className="mt-12"/>
          <div className="flex mx-auto space-x-6">
            <PieChart src="/Sequence 01.gif" width="1920" height="1080" className=" mx-6 pt-12 rounded-xl bg-black " bgcolor={" bg-white "} />
            <PieChart src="/Sequence 02.gif" width="1920" height="1080" className=" mx-6 pt-12 rounded-xl bg-black " bgcolor={" bg-white "} />
          </div>

          <div className=" mt-16">
            <div className="flex justify-evenly mx-6">
              <h3 className="font-bold text-2xl mx-6 text-center w-1/2">Sign Up</h3>
              <h3 className="font-bold text-2xl mx-6 text-center w-1/2">Sign In</h3>
            </div>
            <div className="flex space-x-6 mt-4 mx-6">
              <PieChart src="/Sign up Page (2).png" width="1920" height="1080" className=" mx-6 " bgcolor={" bg-black "} />
              <PieChart src="/Login Page.png" width="1920" height="1080" className=" mx-6 " bgcolor={" bg-black "} />
            </div>
          </div>
          <div className=" mt-16">
            <div className="flex justify-evenly mx-6">
              <h3 className="font-bold text-2xl mx-6 text-center w-1/2">Forgot Password</h3>
              <h3 className="font-bold text-2xl mx-6 text-center w-1/2">Select User</h3>
            </div>
            <div className="flex space-x-6 mt-4 mx-6">
              <PieChart src="/forgotpasspage.png" width="1920" height="1080" className=" mx-6 " bgcolor={" bg-white "} />
              <PieChart src="/Question12Page (1).png" width="1920" height="1080" className=" mx-6 " bgcolor={" bg-white "} />
            </div>
          </div>
          <div className=" mt-16">
            <div className="flex justify-evenly mx-6">
              <h3 className="font-bold text-2xl mx-6 text-center w-1/2">Project View</h3>
              <h3 className="font-bold text-2xl mx-6 text-center w-1/2">Add New Project</h3>
            </div>
            <div className="flex space-x-6 mt-4 mx-6">
              <PieChart src="/HomePage (4).png" width="1920" height="1080" className=" mx-6 " bgcolor={" bg-white "} />
              <PieChart src="/Add Project.png" width="1920" height="1080" className=" mx-6 " bgcolor={" bg-white "} />
            </div>
          </div>
          <div className=" mt-16">
            <div className="flex justify-evenly mx-6">
              <h3 className="font-bold text-2xl mx-6 text-center w-1/2">Dashboard</h3>
              <h3 className="font-bold text-2xl mx-6 text-center w-1/2">Add New Calendar Event</h3>
            </div>
            <div className="flex mx-6 space-x-6 mt-4">
              <PieChart src="/Dashboard (3).png" width="1920" height="1080" className=" mx-6 " bgcolor={" bg-white "} />
              <PieChart src="/CalendarEvent.png" width="1920" height="1080" className=" mx-6 " bgcolor={" bg-white "} />
            </div>
          </div>
          <div className=" mt-16">
            <div className="flex justify-evenly mx-6">
              <h3 className="font-bold text-2xl mx-6 text-center w-1/2">Messages</h3>
              <h3 className="font-bold text-2xl mx-6 text-center w-1/2">Meeting</h3>
            </div>
            <div className="flex mx-6 space-x-6 mt-4">
              <PieChart src="/MessagesPage (1).png" width="1920" height="1080" className=" mx-6 " bgcolor={" bg-white "} />
              <PieChart src="/Meetingpage (2).png" width="1920" height="1080" className=" mx-6 " bgcolor={" bg-white "} />
            </div>
          </div>
          <div className=" mt-16">
            <div className="flex justify-evenly mx-6">
              <h3 className="font-bold text-2xl mx-6 text-center w-1/2">Profile</h3>
              <h3 className="font-bold text-2xl mx-6 text-center w-1/2 text-white">Profile</h3>
            </div>
            <div className="flex mx-6 space-x-6 mt-4">
              <PieChart src="/ProfilePage (2).png" width="1920" height="1080" className=" mx-6 w-[49%]" bgcolor={" bg-white "} />
            </div>
          </div>
        </div>
      </div>

      {/* Ninth Page */}
      <div className="bg-[#240046] h-fit w-screen text-white pb-20">
        <div className="w-8/12 mx-auto">
          <h1 className="text-6xl pt-20 font-bold">Key Takeaways</h1>
          <p className=" text-2xl pt-12">→ In my journey I made the mistake of worrying about the look of the UI too much. I think taking a step back and reassessing the user flows helped me to re-prioritize the UX.</p>
          <p className=" text-2xl pt-12">→ I could have placed greater emphasis on addressing accessibility needs, which I aim to do going forward.</p>
          <p className=" text-2xl pt-12">→ This project shows how far I have come as a UX/UI Designer. I feel like these final mock-ups are so much better than what I started with and I am really proud of that! If you would like to help me improve, please don&apos;t hesitate to reach out. I would love some feedback on my design and on how I could improve!</p>
          <div className="mt-16 mb-20" />

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