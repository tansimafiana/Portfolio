"use client"

import Image from "next/image";
import GitHubIcon from "@/app/components/GitHubIcon"
import BackButton from "@/app/components/BackToTopButton"

import Navigation from "@/app/navigation/page"
import { useState, useEffect } from "react"

export default function WebDevPage() {
  const scrollY = useScroll();
  const size = useWindowSize();

  const activeTabClass = "py-4 px-8 bg-pink-50 rounded-t-lg "
  const inactiveTabClass = "py-4 px-8 bg-rose-100 rounded-t-lg hover:bg-rose-50 "
  const [groupActive, setGroupActive] = useState([true, false])

  useEffect(() => {
    if (typeof window === undefined || typeof window === "undefined") {
      return;
    }
  });

  return (
    <main className="bg-white text-black my-auto flex-col flex flex-wrap ">
      <Navigation id="Navbar" subpage={false} />
      { scrollY > 500 &&
      <div className={"transition duration-500 opacity-100"}>
        <BackButton url="#Navbar" />
      </div>}

      <div className="w-screen bg-white flex-col pb-12">
        <div className="w-10/12 h-full flex flex-col justify-center items-center mx-auto font-light">
          {/* Logo */}
          <div className="flex pt-12 justify-center w-full">
            <Image alt="DVC" className="pt-2 ml-auto" src="/Home - Logged Out.png" height={"300"} width={size.width ? (size.width / 4 > 300 ? 300 : size.width / 4) : 300} />
            <h1 className=" mr-auto text-5xl pt-2 text-[#1a1a53]">| Capstone</h1>
            <div className=" my-auto">
              <GitHubIcon url="https://github.com/afern140/Diamond-Valley-Cattery-Website" />
            </div>
          </div>

          {/* Slide 1 */}
          <div className="flex flex-col pt-20 w-full">
            <h2 className="text-3xl text-center pb-6">Introduction</h2>
            <p>Hello, my name is Tansima Kamal Fiana, and I am studying Software Development at Southern Alberta Institute of Technology. I am currently working on my capstone project for my final semester, and I would like to showcase it here in my portfolio.</p>
          </div>

          {/* Slide 2 */}
          <div className="flex flex-col pt-20 w-full space-y-6">
            <h2 className="text-3xl text-center">Overview</h2>
            <p>Project Identification: Team Ultimate aims to develop an application for Diamond Valley Cattery, hereafter referred to as the client, to streamline the management of their cat breeding business. Currently, the client lacks a system to effectively manage their operations, providing an opportunity for our team to build a comprehensive solution from scratch.</p>
            <p>Proposed Solution: Team Ultimate proposes the development of a web application with an integrated database to facilitate the client&apos;s needs. The application will enable efficient data entry, maintenance, and display of information related to cats available for sale. This includes details such as appearance, medical history, lineage, and more. Additionally, the web app will feature a customer-facing interface, allowing potential adopters to browse a catalogue of cats and schedule appointments seamlessly.</p>
            
          </div>

          {/* Slide 3 */}
          <div className="flex flex-col pt-20 w-full space-y-6">
            <h2 className="text-3xl text-center">Tech Stack</h2>
            <p>React.js: React.js serves as the primary front-end framework for building the web application&apos;s user interface. Its component-based architecture and virtual DOM enable efficient development and management of dynamic user interfaces.</p>
            <p>Tailwind CSS: Tailwind CSS is used for styling the application. Its utility-first approach allows for rapid styling and customization, ensuring a visually appealing and responsive design.</p>
            <p>Firebase: Firebase provides the backend services for this project, offering features such as authentication, real-time database, and cloud storage. Its seamless integration with React.js simplifies the development process and enables rapid prototyping.</p>
            <p>JSON: JSON (JavaScript Object Notation) is used for data interchange between the front-end and backend components of the application. It offers a lightweight and human-readable format for storing and transmitting structured data.</p>
         <p>Figma: Figma is employed for designing and prototyping the user interface of the web application. Its collaborative features and versatile design tools facilitate effective communication and iteration within the project team.</p>
          </div>

         

          {/* Slide 4 */}
          <div className="flex flex-col pt-20 w-full space-y-6">
            <h2 className="text-3xl text-center"> Features</h2>
            <p>Messaging System: Users can communicate with the admin through an integrated messaging system. This feature facilitates seamless interaction and support between stakeholders.</p>
            
            <p>Authentication: Authentication mechanisms are implemented to ensure that authorized users can access the application. This feature enhances the security of the platform and protects sensitive information.</p>
            <p>Comments System: A comments system allows users to provide feedback, ask questions, or engage in discussions related to cats, litters, or any other relevant topics. This feature promotes community engagement and fosters a sense of community within the platform..</p>
            
            <p>User Dashboard: Each user has access to a personalized dashboard where they can view relevant information, such as their profile details, messages, notifications, and any other personalized content. This feature provides users with a centralized hub for managing their interactions and activities within the application.</p>
            <p>Cats Page: The cats page serves as a catalog where users can browse through available cats for adoption. Detailed information about each cat is provided to help users make informed decisions.</p>
            <p>Litters Page: The litters page showcases information about current litters, including details such as the parent cats, birth dates, and available kittens. Users can explore this page to learn more about upcoming litters or to inquire about adopting kittens.</p>
            <p>Carousel Images: A carousel of images is integrated into the application to showcase visually appealing content, such as photos of cats, litters, or special announcements. This feature adds visual interest to the platform and enhances the overall user experience.</p>
            
          </div>


            {/* Slide 5 */}
          <div className="flex flex-col pt-20 w-full space-y-6">
            <h2 className="text-3xl text-center">DIAGRAMS</h2>
            <h3 className="text-2xl">Use Case:</h3>
            <div className="flex justify-center pb-6 w-11/12 mx-auto drop-shadow"><Image alt="diagram" className="justify-center flex" src="/Usecasediagram1.png" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
              <div className="space-y-6 pb-6">
                <h3 className="text-2xl">Class Diagram:</h3>
                <div className="flex justify-center w-11/12 mx-auto drop-shadow"><Image alt="diagram" className="justify-center flex" src="/ClassDiagram.png" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
              </div>
            <div className={size.width < 900 ? "pt-4 py-4" : "grid grid-cols-2 text-center gap-y-8 pt-4"}>
              <div className="space-y-6 pb-6">
                <h3 className="text-2xl">Entity Relationship Diagram:</h3>
                <div className="flex justify-center w-11/12 mx-auto drop-shadow"><Image alt="diagram" className="justify-center flex" src="/Entityrelationshipdiagram1.png" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
              </div>
              <div className="space-y-6 pb-6">
                <h3 className="text-2xl">State Machine Diagram:</h3>
                <div className="flex justify-center w-11/12 mx-auto drop-shadow"><Image alt="diagram" className="justify-center flex" src="/Statemachinediagram2.png" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
              </div>
              <div className="space-y-6 pb-6">
                <h3 className="text-2xl">Activity Diagram (AddNewCat):</h3>
                <div className="flex justify-center w-11/12 mx-auto drop-shadow"><Image alt="diagram" className="justify-center flex" src="/ActivityDiagramBreederAddNewCat.png" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl">Activity Diagram (Purchase Cat):</h3>
                <div className="flex justify-center w-11/12 mx-auto drop-shadow"><Image alt="diagram" className="justify-center flex" src="/ActivityDiagramCustomerPurchaseCatUpdated.png" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
              </div>
            </div>
          </div>

          {/* Slide 5 */}
          <div className="flex flex-col pt-20 text-center w-full space-y-6">
            <h2 className="text-3xl text-center">PROTOTYPE (Figma)</h2>
            <div className={ size.width < 900 ? " space-y-6" : "grid grid-cols-3 text-center gap-y-16"}>
              <div className="space-y-6 pb-6">
                <h3 className="text-2xl">HomePage (Logged Out):</h3>
                <div className="flex justify-center w-11/12 mx-auto drop-shadow"><Image alt="diagram" className="justify-center flex" src="/Home -Logged Out.png" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
              </div>
              <div className="space-y-6 pb-6">
                <h3 className="text-2xl">Cat List (Logged Out):</h3>
                <div className="flex justify-center w-11/12 mx-auto drop-shadow"><Image alt="diagram" className="justify-center flex" src="/Cats List - Logged Out.png" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
              </div>
              <div className="space-y-6 pb-6">
                <h3 className="text-2xl">Cat List (Logged In - Breeder):</h3>
                <div className="flex justify-center w-11/12 mx-auto drop-shadow"><Image alt="diagram" className="justify-center flex" src="/Cats List - Logged In (Breeder).png" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
              </div>
              <div className="space-y-6 pb-6">
                <h3 className="text-2xl"> Cat (Logged Out): </h3>
                <div className="flex justify-center w-11/12 mx-auto drop-shadow"><Image alt="diagram" className="justify-center flex" src="/Cat - Logged Out.png" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
              </div>
              <div className="space-y-6 pb-6">
                <h3 className="text-2xl">Litter List (Logged Out):</h3>
                <div className="flex justify-center w-11/12 mx-auto drop-shadow"><Image alt="diagram" className="justify-center flex" src="/Litters List - Logged Out.png" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
              </div>
              <div className="space-y-6 pb-6">
                <h3 className="text-2xl">Litter (Logged Out):</h3>
                <div className="flex justify-center w-11/12 mx-auto drop-shadow"><Image alt="diagram" className="justify-center flex" src="/Litter - Logged Out.png" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
              </div>
              <div className="space-y-6 pb-6">
                <h3 className="text-2xl">Chat Portal (Logged In):</h3>
                <div className="flex justify-center w-11/12 mx-auto drop-shadow"><Image alt="diagram" className="justify-center flex" src="/Chat Portal - Logged In.png" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl">User Page (Logged In):</h3>
                <div className="flex justify-center w-11/12 mx-auto drop-shadow"><Image alt="diagram" className="justify-center flex" src="/User Page - Logged In.png" height="1080" width="1920" style={{objectFit: 'cover', position: 'relative'}} /></div>
              </div>
            </div>
          </div>

           {/* Slide 6 */}
           <div className="flex flex-col pt-20 w-full space-y-6">
            <h2 className="text-3xl text-center">Demo</h2>
            <p>👷‍♀️ UNDER CONSTRUCTION 👷‍♀️</p>        
          </div>

          {/* Slide 7 */}
          <div className="flex flex-col pt-20 w-full space-y-6">
            <h2 className="text-3xl text-center">Self Reflection</h2>
            <p>The capstone project for my portfolio is an enriching journey, offering opportunities for growth and learning. Working within a team, I hone communication and collaboration skills. Applying theoretical knowledge to real-world scenarios strengthens my understanding of software development principles. Overcoming technical challenges boosts problem-solving abilities. This project serves as a platform for personal and professional growth, enhancing my skills and credibility as a software developer.</p>
                        
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