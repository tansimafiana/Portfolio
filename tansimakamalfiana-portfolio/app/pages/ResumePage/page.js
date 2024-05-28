"use client"

import BackButton from "@/app/components/BackToTopButton"

import Navigation from "@/app/navigation/page"
import { useState, useEffect } from "react"

export default function ResumePage() {
  const size = useWindowSize();
  const scrollY = useScroll();

  const stretchedWindowClass = ["w-10/12 h-full flex justify-center mx-auto font-light",
                                "h-full",
                                "h-full pl-8 ml-4 mx-auto w-4/5"]
  const slimWindowClass = ["w-10/12 h-full flex flex-wrap justify-center mx-auto font-light",
                           "h-full",
                           "h-full mt-6 mx-auto w-full"]

  useEffect(() => {
    if (typeof window === undefined || typeof window === "undefined") {
      return;
    }
  });

  return (
    <main className="bg-white text-black my-auto flex-col flex flex-wrap ">
      <Navigation />
      { scrollY > 500 &&
      <div className={"transition duration-500 opacity-100"}>
        <BackButton url="#Navbar" />
      </div>}

      <div className="w-screen bg-white flex-col pb-12">
        <h1 className=" mx-auto justify-center flex py-4 mb-12 text-4xl">RESUME</h1>

        {/* Double-sided pane */}
        <div className={size.width < 1280 ? slimWindowClass[0] : stretchedWindowClass[0]}>
          {/* First Side */}
          <div className={size.width < 1280 ? slimWindowClass[1] : stretchedWindowClass[1]}>
            <h2 className=" text-3xl pb-12 font-normal">🌸 <span className="ml-6">Experience</span></h2>

            {/* Experience Field */}
            <div className="">
            <div className="w-full flex justify-space mx-auto">
                <h3 className="mr-auto justify-start text-2xl font-normal">Cyferd | Internship </h3>
                <h3 className="ml-auto pr-4">01/23 - 04/23</h3>
              </div>
              <div className="w-full flex justify-space mx-auto">
                <h3 className="ml-auto pr-4 italic">Calgary, AB</h3>
              </div>

              <ul className="mt-4 space-y-1">

                <li>• Collaborated with the solution expert to develop a mental health application using Cyferd technology and JSON coding. </li>
                <li>• Crafted PowerPoint presentations to highlight application front-end features, enhancing user satisfaction. </li>
                <li>• Earned Certified Cyferd Modeller title for contributions to project development and implementation. </li>
                <li>• Applied business principles to enhance innovation and support business objectives.</li>

                <li>• Reference: <a className="hover:bg-rose-300" href="mailto:haider.al-seaidy@cyferd.com">haider.al-seaidy@cyferd.com</a> </li>
              </ul>
            </div>

            <div className="mt-6">
            <div className="w-full flex justify-space mx-auto">
                <h3 className="mr-auto justify-start text-2xl font-normal">Data Entry Assistant | V&J Accounting Inc.</h3>
                <h3 className="ml-auto pr-4">04/23 - 09/23</h3>
              </div>
              <div className="w-full flex justify-space mx-auto">
                <h3 className="ml-auto pr-4 italic">Calgary, AB</h3>
              </div>
              <ul className="mt-4 space-y-1">
                <li>• Utilize advanced Excel functions (pivot tables, VLOOKUP, macros) to optimize financial processes.</li>
                <li>• Collaborate with clients to gather requirements and implement efficient data entry protocols for accurate financial reporting.</li>
                <li>• Analyze transactions for budget tracking and develop monthly reports and dashboards for actionable insights.</li>
                <li>• Employed SQL database management techniques to join tables and merge datasets, enhancing data integrity.</li>
              </ul>
            </div>

            <div className="mt-6">
              <div className="w-full flex justify-space mx-auto">
                <h3 className="mr-auto justify-start text-2xl font-normal">Team Lead | The Body Shop</h3>
                <h3 className="ml-auto pr-4">10/23 - 02/24</h3>
              </div>
              <div className="w-full flex justify-space mx-auto">
                <h3 className="ml-auto pr-4 italic">Calgary, AB</h3>
              </div>
              <ul className="mt-4">
                <li>• Generated financial reports on cost breakdowns and profitability, aiding strategic decision-making.</li>
                <li>• Trained sales associates, enhancing team performance and customer service quality.</li>
                <li>• Enhanced team effectiveness by honing communication and customer relationship skills, fostering a client-centric environment.</li>
              </ul>
            </div>

            <h2 className=" text-3xl pb-12 mt-10">🌸 <span className="ml-6">Projects</span></h2>
            <div className="">
              <div className="w-full flex justify-space mx-auto">
                <h3 className="mr-auto justify-start text-2xl font-normal">UX/Front-end Lead | Capstone Project</h3>
                <h3 className="ml-auto pr-4">01/24 - 04/24</h3>
              </div>
              <div className="w-full flex justify-space mx-auto">
                <h3 className="mr-auto pr-4 italic"> TailwindCSS, React.JS, Next.JS, Node.JS, Firebase</h3>
                <h3 className="ml-auto pr-4 italic">Calgary, AB</h3>
              </div>
              <ul className="mt-4 space-y-1">
                <li>• Collaborated Capstone team to develop a dynamic cat breeding website using React.js, Next.js, and Node.js for the frontend and Firebase for real-time database interactions.</li>
                <li>• Led UX design efforts using Figma to create intuitive, user-friendly interfaces, enhancing the overall user experience.</li>
                <li>• Streamlined development workflows with Visual Studio Code and Git/GitHub for enhanced coding, debugging, and version control, boosting code quality and deployment speed.</li>
                <li>• Engineered an admin dashboard to efficiently manage over 50 cat breeds and 100 cats, boosting user engagement and interactive site content.</li>
              </ul>
            </div>
          </div>

          {/* Second Side */}
          <div className={size.width < 1280 ? slimWindowClass[2] : stretchedWindowClass[2]}>
            <h2 className=" text-3xl pb-12 font-normal">🌸 <span className="ml-6">Education</span></h2>

            <div className="w-full flex justify-space mx-auto">
              <h3 className="mr-1  justify-start text-2xl font-normal">Southern Alberta <br/>Institute of Technology</h3>
              <h3 className=" ml-auto text-nowrap pr-4">09/22 - 04/24</h3>
            </div>
            <div className="w-full flex justify-space mx-auto pb-4">
              <h3 className="mr-auto pr-4 text-lg">Software Development Diploma</h3>
              <h3 className="ml-auto pr-4 text-nowrap text-right italic">Calgary, AB</h3>
            </div>
            <div className="w-full flex justify-space mx-auto">
              <h3 className="mr-auto pr-4">Relevant Coursework: User-Experience and Design, Web Development, Object-Oriented
Programming, Software Projects: Analysis, Design, and Management, Critical Thinking, Database
Design and Programming, Emerging Trends, Technical Communications. Mathematics for
Technologists, Software Testing and Deployment, Capstone</h3>
            </div>

            <div className="w-full flex justify-space mx-auto pt-8">
              <h3 className="mr-1  justify-start text-2xl font-normal">UX Design Institute</h3>
              <h3 className=" ml-auto text-nowrap pr-4">Present</h3>
            </div>
            <div className="w-full flex justify-space mx-auto pb-4">
              <h3 className="mr-auto pr-4 text-lg">UX Design Diploma Certificate</h3>
              <h3 className="ml-auto pr-4 text-nowrap text-right italic">Remote</h3>
            </div>

            <h2 className=" text-3xl mt-8 font-normal">🌸 <span className="ml-6">Skills</span></h2>
            <div>
              <h3 className=" text-2xl mt-4 font-normal">Technical</h3>
              <p>Figma, Adobe Photoshop, Illustrator, Python, SQL, JavaScript, HTML/CSS, React Native,
JSON, WordPress, Figma, MS Office, Excel, PowerPoint, SharePoint, Visio, Access Database</p>
            </div>
            <div>
              <h3 className=" text-2xl mt-4 font-normal">Skills</h3>
              <p>UX/UI, Agile Methodologies, SDLC, Use Cases, Test Cases/Scripts, Requirements Gathering,
Web Development, Software Deployment, RDBMS, Prototyping, Documentation, Programming,
Technical Analysis, Data Analysis, Project Management, Retail, Content Creation, Customer Service,
KPIs</p>
            </div>
            <div>
              <h3 className=" text-2xl mt-4 font-normal">Interests</h3>
              <p>A passionate skier who brings the same energy and determination from the slopes to solving technical challenges.</p>
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
