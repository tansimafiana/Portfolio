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
        <Slideshow slideData={[returnGameDevPage(), returnEngineeringUX()]}/>
      </div>
            
    </main>   
  );
}

function returnGameDevPage() {
  return (
      /*<div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
        <button style={spanStyle}>{slideImage.caption}</button>
      </div>*/
      <div className={"flex align-middle h-[60vh]"}>
        {/*<Image className="justify-center m-auto" alt="slideshow" src={slideImage.src} width={size.width ? size.width * 0.5 : 300} height={size.height ? size.height * 0.5 : 300} />*/}
        <div className={"flex justify-center w-10/12 h-4/5 m-auto"}>
          <div className="rounded-xl -rotate-12 m-auto w-full h-4/5">
            <Link href="../pages/GameDevPage">
              <Image className=" hover:scale-110 transition duration-300" alt="GameDev" src="/Zombie3D_New.gif" fill style={{objectFit: "contain", borderRadius: "5px"}}  />
            </Link>
          </div>
          <div className=" p-4 rotate-12 my-auto bg-white opacity-70 rounded-xl w-full h-4/5">
            <h2 className=" font-bold text-center mx-auto mb-1 text-xl">Game Development</h2>
            <p>Game development things...</p>
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
        <div className={"flex justify-center w-10/12 h-4/5 m-auto"}>
          <div className="rounded-xl -rotate-12 m-auto w-full h-4/5">
            <Link href="../pages/EngineeringPage">
              <Image className=" hover:scale-110 transition duration-300" alt="EngineeringUX" src="/HMI 11_ - Home Page.png" fill style={{objectFit: "contain", borderRadius: "5px"}}  />
            </Link>
          </div>
          <div className=" p-4 rotate-12 my-auto bg-white opacity-70 rounded-xl w-full h-4/5">
            <h2 className=" font-bold text-center mx-auto mb-1 text-xl">Engineering UX</h2>
            <p>Engineering UX things...</p>
          </div>
        </div>
      </div>
  );
};