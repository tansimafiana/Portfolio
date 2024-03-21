"use client"

import Image from "next/image";
import Link from "next/link"

import Navigation from "@/app/navigation/page"
import Slideshow from "@/app/components/Slideshow";
import { Slide } from "react-slideshow-image";

export default function ContactPage() {
  return (
    <main className="w-screen bg-rose-100 flex-col text-black">
      <Navigation/>

      <div className="mx-auto flex w-4/5 justify-center">
        <div className="flex flex-col text-black align-middle py-8">
          <div className="flex-col justify-center ">
            <h1 className=" text-6xl py-4 px-8 text-center font-extrabold">PORTFOLIO</h1>
            <div className="flex w-full mx-auto justify-evenly">
              <button className="hover:text-rose-300 text-xl">
                <Link href="/pages/WebDevPage">Web Dev</Link>
              </button>
              <p>|</p>
              <button className="hover:text-rose-300 text-xl">
                <Link className=" drop-shadow-md" href="/pages/InternshipPage">Internship</Link></button>
              <p>|</p>
              <button className="hover:text-rose-300 text-xl">
                <Link href="/pages/EngineeringPage">Engineering UX</Link>
              </button>
            </div>
          </div>      
        </div>
      </div>
      <div className="w-4/5 mx-auto">
        <Slideshow slideData={[returnCapstone(), returnInternship(), returnEngineeringUX(), returnPortfolio(), returnGameDevPage()]}/>
      </div>
            
    </main>   
  );
}

function returnCapstone() {
  return (
    /*<div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
      <button style={spanStyle}>{slideImage.caption}</button>
    </div>*/
    <div className={"flex align-middle h-[60vh]"}>
      {/*<Image className="justify-center m-auto" alt="slideshow" src={slideImage.src} width={size.width ? size.width * 0.5 : 300} height={size.height ? size.height * 0.5 : 300} />*/}
      <div className={"flex rounded-3xl justify-center w-10/12 h-4/5 m-auto"}>
        <div className=" rounded-3xl -rotate-12 m-auto w-full h-4/5">
          <Link href="../pages/CapstonePage">
            <Image className=" rounded-3xl hover:scale-110 transition duration-300 shadow-xl" alt="Cyferd" src="/CatteryHomepage.png" fill style={{objectFit: "contain", borderRadius: "5px"}}  />
          </Link>
        </div>
        <div className=" shadow-xl overflow-auto scroll-smooth p-4 rotate-12 my-auto bg-rose-50 opacity-90 rounded-3xl w-full h-4/5">
          <h2 className=" font-bold text-center mx-auto mb-1 text-xl">Diamond Valley Cattery</h2>
          <p className=" text-right text-sm">(React.js, Tailwind CSS, Firebase, Figma, Software Ideas Modeler (UML), Github)</p>
          <button className="bg-white rounded-xl p-2 m-4 opacity-100 flex drop-shadow-md ml-auto mr-full"><Link href="../pages/CapstonePage">Case Study ➤</Link></button>
          <p className="">Hello! I&apos;m Tansima Kamal Fiana, a Software Development student at SAIT. My team and I are currently working on developing the Diamond Valley Cattery website, dedicated to cat breeding, aiming to streamline operations for our client. We&apos;ve invested many hours into this project and continue to do so. Specifically, I&apos;ve been in charge of the front end, overseeing the UX/UI design process in Figma and implementing it using React.js and Tailwind CSS.</p>
        </div>
      </div>
    </div>
  );
};

function returnInternship() {
  return (
      /*<div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
        <button style={spanStyle}>{slideImage.caption}</button>
      </div>*/
      <div className={"flex align-middle h-[60vh]"}>
        {/*<Image className="justify-center m-auto" alt="slideshow" src={slideImage.src} width={size.width ? size.width * 0.5 : 300} height={size.height ? size.height * 0.5 : 300} />*/}
        <div className={"flex rounded-3xl justify-center w-10/12 h-4/5 m-auto"}>
          <div className=" shadow-xl rounded-3xl -rotate-12 m-auto w-full h-4/5">
            <Link href="../pages/InternshipPage">
              <Image className="bg-white rounded-3xl hover:scale-110 transition duration-300" alt="Cyferd" src="/Cyferd.png" fill style={{objectFit: "contain", borderRadius: "5px"}}  />
            </Link>
          </div>
          <div className=" shadow-xl overflow-auto scroll-smooth p-4 rotate-12 my-auto bg-rose-50 opacity-90 rounded-3xl w-full h-4/5">
            <h2 className=" font-bold text-center mx-auto mb-1 text-xl">Cyferd Internship</h2>
            <p className=" text-center text-sm"> Pause and Reflect App</p>
            <button className="bg-white rounded-xl p-2 m-4 opacity-100 flex drop-shadow-md ml-auto mr-full"><Link href="../pages/InternshipPage">Case Study ➤</Link></button>
            <p className="">During my internship, I developed Pause and Reflect, an app on the Cyferd platform. It&apos;s aimed at reducing stress and promoting well-being by encouraging users to take a moment to pause, reflect, and reconnect with themselves. Designed with busy professionals and college students in mind, the app provides personalized self-reflection activities. While I&apos;m unable to provide a live demo, imagine features like sleep pattern tracking charts, personalized wellness profiles, tools for maintaining physical health, and visual aids for better understanding. This project significantly improved my coding and problem-solving abilities, and I&apos;m especially grateful to Sara Al-Seaidy for her guidance. My certificate is inside. I also received a certificate for my work on this project.</p>
          </div>
        </div>
      </div>
  );
};

function returnEngineeringUX() {
  return (
    /*<div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
      <button style={spanStyle}>{slideImage.caption}</button>
    </div>*/
    <div className={"flex align-middle h-[60vh]"}>
      {/*<Image className="justify-center m-auto" alt="slideshow" src={slideImage.src} width={size.width ? size.width * 0.5 : 300} height={size.height ? size.height * 0.5 : 300} />*/}
      <div className={"flex rounded-3xl justify-center w-10/12 h-4/5 m-auto"}>
        <div className=" shadow-xl rounded-3xl -rotate-12 m-auto w-full h-4/5">
          <Link href="../pages/InternshipPage">
            <Image className="rounded-3xl hover:scale-110 transition duration-300" alt="Cyferd" src="/HMI 11_ - Home Page.png" fill style={{objectFit: "contain", borderRadius: "5px"}}  />
          </Link>
        </div>
        <div className=" shadow-xl overflow-auto scroll-smooth p-4 rotate-12 my-auto bg-rose-50 opacity-90 rounded-3xl w-full h-4/5">
          <h2 className=" font-bold text-center mx-auto mb-1 text-xl">Engineering UX</h2>
          <p className=" text-center text-sm">(Figma, Sketches)</p>
          <button className="bg-white rounded-xl p-2 m-4 opacity-100 flex drop-shadow-md ml-auto mr-full"><Link href="../pages/EngineeringPage">Case Study ➤</Link></button>
          <p className="">Partnering with a friend from Mechanical Engineering, we&apos;re integrating an Automated Storage Retrieval System (ASRS) with an ABB IRB140 Robot Arm. My role involves designing a user-friendly Human-Machine Interface (HMI) using Figma. Through this collaboration, I&apos;m exploring new concepts and pushing the boundaries of my skills. Stay tuned for updates on our progress!</p>
        </div>
      </div>
    </div>
  );
};

function returnPortfolio() {
  return (
    /*<div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
      <button style={spanStyle}>{slideImage.caption}</button>
    </div>*/
    <div className={"flex align-middle h-[60vh]"}>
      {/*<Image className="justify-center m-auto" alt="slideshow" src={slideImage.src} width={size.width ? size.width * 0.5 : 300} height={size.height ? size.height * 0.5 : 300} />*/}
      <div className={"flex rounded-3xl justify-center w-10/12 h-4/5 m-auto"}>
        <div className=" shadow-xl rounded-3xl -rotate-12 m-auto w-full h-4/5">
          <Link href="../pages/PersonalPortfolioPage">
            <Image className="rounded-3xl hover:scale-110 transition duration-300" alt="Cyferd" src="/PortfolioSnap.jpeg" fill style={{objectFit: "contain", borderRadius: "5px"}}  />
          </Link>
        </div>
        <div className=" shadow-xl overflow-auto scroll-smooth p-4 rotate-12 my-auto bg-rose-50 opacity-90 rounded-3xl w-full h-4/5">
          <h2 className=" font-bold text-center mx-auto mb-1 text-xl">Introducing Tansima Kamal Fiana&apos;s Portfolio Showcase</h2>
          <p className=" text-center text-sm">(Figma, Sketches)</p>
          <button className="bg-white rounded-xl p-2 m-4 opacity-100 flex drop-shadow-md ml-auto mr-full"><Link href="../pages/PersonalPortfolioPage">Case Study ➤</Link></button>
          <p className="">Hello! I&apos;m Tansima Kamal Fiana, a Software Development student at SAIT, and this is my portfolio. Dive into a world where creativity meets technology. Crafted with React.js and Tailwind CSS, my portfolio offers seamless navigation and captivating animations. Explore my work and let&apos;s embark on this creative journey together. Thank you for visiting!</p>
        </div>
      </div>
    </div>
  );
};

function returnGameDevPage() {
  return (
    /*<div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
      <button style={spanStyle}>{slideImage.caption}</button>
    </div>*/
    <div className={"flex align-middle h-[60vh]"}>
      {/*<Image className="justify-center m-auto" alt="slideshow" src={slideImage.src} width={size.width ? size.width * 0.5 : 300} height={size.height ? size.height * 0.5 : 300} />*/}
      <div className={"flex rounded-3xl justify-center w-10/12 h-4/5 m-auto"}>
        <div className=" shadow-xl rounded-3xl -rotate-12 m-auto w-full h-4/5">
          <Link href="../pages/GameDevPage">
            <Image className="rounded-3xl hover:scale-110 transition duration-300" alt="Cyferd" src="/Zombie3D_New.gif" fill style={{objectFit: "contain", borderRadius: "5px"}}  />
          </Link>
        </div>
        <div className=" shadow-xl overflow-auto scroll-smooth p-4 rotate-12 my-auto bg-rose-50 opacity-90 rounded-3xl w-full h-4/5">
          <h2 className=" font-bold text-center mx-auto mb-1 text-xl">Game Development UX</h2>
          <p className=" text-sm text-center">(Adobe Photoshop, Blender, Mixamo, Lo-fi Sketches)</p>
          <button className="bg-white rounded-xl p-2 m-4 opacity-100 flex drop-shadow-md ml-auto mr-full"><Link href="../pages/GameDevPage">Case Study ➤</Link></button>
          <p className="">Using 3D modelling tools to bring my textures to life, I designed the layouts for models and maps for an indie game called Zomboid.</p>
        </div>
      </div>
    </div>
  );
};