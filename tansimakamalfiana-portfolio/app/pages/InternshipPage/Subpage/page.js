"use client"

import Image from "next/image";
import FionaIcon from "@/app/components/FionaIcon"
import GitHubIcon from "@/app/components/GitHubIcon"
import LinkedInIcon from "@/app/components/LinkedInIcon"
import Buttons from "@/app/components/Buttons"
import { IoMdHome } from "react-icons/io";

import Navigation from "@/app/navigation/page"
import { useState, useEffect } from "react"

export default function InternshipSubpage() {
  const size = useWindowSize()

  const stretchedWindowClass = ["w-10/12 h-full flex justify-center mx-auto font-light",
                                "h-full",
                                "h-full pl-8 ml-4 mx-auto w-4/5"]
  const slimWindowClass = ["w-10/12 h-full flex flex-wrap justify-center mx-auto font-light",
                           "h-full",
                           "h-full mt-6 mx-auto w-full"]

  return (
    <main className="bg-rose-100 text-black my-auto flex-col flex flex-wrap ">
      <Navigation />

      <div className="w-screen bg-pink-50 flex-col pb-12">

        
        <div className="w-10/12 h-full flex flex-col justify-center items-center mx-auto font-light">
          {/* Logo */}
          <div className="flex pt-12">
            <Image src="/Cyferd.png" height="300" width="300" />
            <h1 className=" text-5xl pt-2 text-[#1a1a53]">| Internship</h1>
          </div>

          {/* Slide 1 */}
          <div className="flex flex-col pt-20 w-full">
            <h2 className="text-3xl text-center pb-6">Slide 1</h2>
            <p>Hello, I'm Tansima Kamal Fiana, currently studying in my last semester of Software Development at SAIT. As part of my internship, I developed an application called "Pause and Reflect" using the Cyferd platform. Here's an overview of my project.</p>
          </div>

          {/* Slide 2 */}
          <div className="flex flex-col pt-20 w-full space-y-6">
            <h2 className="text-3xl text-center">Slide 2</h2>
            <p>The Pause and Reflect app is designed to aid individuals dealing with stress, anxiety, and feelings of being overwhelmed. It serves as a valuable tool to promote inner peace, balance, and well-being through various features and trackers.</p>
            <p>By encouraging users to slow down, reflect on their emotions, body, and thoughts, the app facilitates mindfulness and self-awareness. Users can also provide feedback to enhance their experience.</p>
            <p>Through this application, users can take a momentary break from the chaos of daily life and reconnect with themselves.</p>
          </div>

          {/* Slide 3 */}
          <div className="flex flex-col pt-20 w-full space-y-6">
            <h2 className="text-3xl text-center">Slide 3 | User Personas</h2>
            <p>College Students: Balancing academic, social, and personal responsibilities, college students often have limited time for self-care. The Pause and Reflect app offers quick self-reflection activities, aiding in emotional regulation and self-awareness.</p>
            <p>Busy Professionals: Juggling multiple commitments, busy professionals often feel stressed and overwhelmed. The app helps them connect with their emotions and thoughts amidst hectic schedules.</p>
          </div>

          {/* Slide 4 */}
          <div className="flex flex-col pt-20 w-full space-y-6">
            <h2 className="text-3xl text-center">Slide 4 | Data Model</h2>
            <p>The data model for Pause and Reflect includes several data collections. Users start by creating a profile, allowing them to track various aspects of their well-being. Trackers and feedback options are associated with each user for personalized experience.</p>
            <div className="flex justify-center w-11/12 mx-auto"><Image className="justify-center flex" src="/Pause and reflect data model_page-0001.jpg" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
          </div>

          {/* Slide 5 */}
          <div className="flex flex-col pt-20 w-full space-y-6">
            <h2 className="text-3xl text-center">Slide 5 | Demo</h2>
            <p>I no longer have access to the platform due to the end of my contract. However, here is an imaginative demo:</p>
            <h3 className="text-2xl">Charts</h3>
            <p>Sleep Analysis: Interpret sleep patterns and identify.</p>
            <p>KPI Charts: Track session counts to monitor progress.</p>
            <h3 className="text-2xl">Personal Profile</h3>
            <p>Medical History: Input relevant medical information for better customization.</p>
            <p>Emotional Wellness Inventory: Assess mood and receive an overall mood score.</p>
            <p>Self-care Practices: Track self-pampering habits and receive journaling prompts.</p>
            <p>Sleep Tracker: Monitor sleep efficiency.</p>
            <h3 className="text-2xl">Wellness of the Body Tabs</h3>
            <p>Physical Health: Access Tools for maintaining physical well-being and disease prevention.</p>
            <h3 className="text-2xl">Support and Feedback</h3>
            <p>Feedback: Provide feedback to improve the app</p>
            <p>Support: Access support resources, including phone numbers and links for various needs.</p>
            <p></p>
          </div>

          {/* Slide 6 */}
          <div className="flex flex-col pt-20 w-full space-y-6">
            <h2 className="text-3xl text-center">Slide 6 | Self Reflection</h2>
            <p>Despite being new to the Cyferd platform, I created an app with ease, learning JSON and developing skills in coding, problem-solving, front-end development, and communication.</p>
            <p>I improved the user interface and added more functionality, such as new features and integrations with other systems, to enhance the app's usability and visual appeal.</p>            
          </div>

          {/* Slide 7 */}
          <div className="flex flex-col pt-20 w-full space-y-6">
            <h2 className="text-3xl text-center">Slide 7 | Acknowledgements</h2>
            <p>Special thanks to Sara [Last Name] for her guidance throughout this project. Your support has been invaluable in bringing this idea to life.</p>
          </div>

          {/* Slide 8 */}
          <div className="flex flex-col pt-20 w-full space-y-6">
            <h2 className="text-3xl text-center">Slide 8 | Certificate</h2>
            <div className="flex justify-center w-11/12 mx-auto"><Image className="justify-center flex" src="/Cyferd-Certificate-TF (1).png" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
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
