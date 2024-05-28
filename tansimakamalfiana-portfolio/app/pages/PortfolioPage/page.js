"use client"

import Image from "next/image";
import Link from "next/link"

import Navigation from "@/app/navigation/page"
import Slideshow from "@/app/components/Slideshow";
import { Slide } from "react-slideshow-image";

export default function ContactPage() {
  return (
    <main className="w-screen bg-white flex-col text-black">
      <Navigation/>

      <div className="mx-auto flex w-4/5 justify-center">
        <div className="flex flex-col text-black align-middle py-8">
          <div className="flex-col justify-center ">
            <h1 className=" text-4xl py-4 px-8 text-center ">PORTFOLIO</h1>
            <div className="flex w-full mx-auto justify-evenly">
              <button className="hover:text-rose-300 text-xl">
                <Link href="/pages/WebDevPage"></Link>
              </button>
              <p></p>
              <button className="hover:text-rose-300 text-xl">
                <Link className=" drop-shadow-md" href="/pages/InternshipPage"></Link></button>
              <p></p>
              <button className="hover:text-rose-300 text-xl">
                <Link href="/pages/EngineeringPage"></Link>
              </button>
            </div>
          </div>      
        </div>
      </div>
      <div className="w-4/5 mx-auto">
        <Slideshow slideData={[returnQuickConstruct(), returnEngineeringUX()]}/> {/*returnInternship() {/*, returnCapstone(), returnPortfolio(), returnGameDevPage()]}/>*/}
      </div>
            
    </main>   
  );
}

function returnQuickConstruct() {
  return (
    <div className={"flex align-middle h-[60vh]"}>
      <div className="relative h-full bg-white w-[50vw] mx-auto rounded-xl border border-gray-300 flex flex-col z-10 overflow-hidden shadow-lg mb-4">
        <div className=" absolute top-0 ml-[5%] mr-[10%] h-[200px] w-[80%] mt-10 z-20">
          <div className="flex w-full">
            <div className=" p-4 bg-gray-200 size-full max-w-24 max-h-24 mt-6 rounded-full">
              <Image src="/QuickConstruct Icon.png"
                    alt="Quick Construct Icon"
                    width="256"
                    height="256"
                    className=""/>
            </div>
            <div className="flex flex-col ml-8">
              <h1 className="font-semibold text-3xl  mt-5">QuickConstruct</h1>
              <div className="flex flex-col mr-auto max-w-[90%]">
                <p className="text-gray-600 mb-4 text-justify mt-2 text-sm">Industry professional application for construction project managers and tradespeople, incorporating well-planned UX/UI designing steps to ensure a flexible and user-friendly experience that is excellent for every type of user.</p>
                <Link href="./QuickConstructPage" className="size-fit rounded-xl absolute top-0 right-0">
                  <div className=" mt-3 size-fit px-2 py-1 bg-gray-100 rounded-xl shadow-lg hover:cursor-pointer hover:text-purple-700 hover:scale-105 transition duration-300 ">
                      <p className="text-base">Case Study <span className="font-extrabold">→</span></p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

        </div>
        <Link href="./QuickConstructPage" className="size-full rounded-xl">
          <div className="relative size-full flex flex-col hover:cursor-pointer hover:scale-110 transition duration-300">
            <div className="absolute bottom-0 right-0 flex flex-col size-full">
              <div className="min-h-[40%] relative"/>
              <Image src="/QuickConstruct Portfolio Thumbnail Splash.png"
                    alt="QuickConstruct Mockup Thumbnail"
                    width="1920"
                    height="1080"
                    className="relative max-h-[60%] w-fit ml-auto mt-auto"/>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 flex flex-col size-full">
              <div className="min-h-[40%] relative"/>
              <Image src="/QuickConstruct Portfolio Thumbnail Screens.png"
                    alt="QuickConstruct Mockup Thumbnail"
                    className="relative max-h-[45%] mt-auto mb-8 -translate-x-[10%]"
                    layout="fill"
                    objectFit="contain"/>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

function returnCapstone() {
  return (
    <div className={"flex align-middle h-[60vh]"}>
      <div className="h-full bg-white w-[40vw] mx-auto rounded-xl border border-gray-400">

      </div>
    </div>
  );
};

function returnInternship() {
  return (
    <div className={"flex align-middle h-[60vh]"}>
    <div className="relative h-full bg-white w-[50vw] mx-auto rounded-xl border border-gray-300 flex flex-col z-10 overflow-hidden shadow-lg mb-4">
      <div className=" absolute top-0 ml-[5%] mr-[10%] h-[200px] w-[80%] mt-10 z-20">
        <div className="flex w-full">
          <div className=" size-full max-w-24 max-h-24 mt-6 rounded-full">
            <Image src="/Cyferd Logo Dark.jpg"
                  alt="Quick Construct Icon"
                  width="256"
                  height="256"
                  className="rounded-full"/>
          </div>
          <div className="flex flex-col ml-8">
            <h1 className="font-semibold text-3xl  mt-5">Cyferd Internship</h1>
            <div className="flex flex-col mr-auto max-w-[90%]">
              <p className="text-gray-600 mb-4 text-justify mt-2 text-sm">Industry professional application for construction project managers and tradespeople, incorporating well-planned UX/UI designing steps to ensure a flexible and user-friendly experience that is excellent for every type of user.</p>
              <Link href="./InternshipPage" className="size-fit rounded-xl ml-auto">
                <div className=" mt-3 size-fit px-2 py-1 bg-gray-100 rounded-xl shadow-lg hover:cursor-pointer hover:text-purple-700 hover:scale-105 transition duration-300 ">
                    <p className="text-base">Case Study <span className="font-extrabold">→</span></p>
                </div>
              </Link>
            </div>
          </div>
        </div>

      </div>
      <Link href="./InternshipPage" className="size-full rounded-xl">
        <div className="relative size-full flex flex-col hover:cursor-pointer hover:scale-110 transition duration-300">
          <div className="absolute bottom-0 right-0 flex flex-col size-full">
            <div className="min-h-[40%] relative"/>
            <Image src="/QuickConstruct Portfolio Thumbnail Splash.png"
                  alt="QuickConstruct Mockup Thumbnail"
                  width="1920"
                  height="1080"
                  className="relative max-h-[60%] w-fit ml-auto mt-auto"/>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 flex flex-col size-full">
            <div className="min-h-[40%] relative"/>
            <Image src="/QuickConstruct Portfolio Thumbnail Screens.png"
                  alt="QuickConstruct Mockup Thumbnail"
                  className="relative max-h-[45%] mt-auto mb-8 -translate-x-[10%]"
                  layout="fill"
                  objectFit="contain"/>
          </div>
        </div>
      </Link>
    </div>
  </div>
  );
};

function returnEngineeringUX() {
  return (
    <div className={"flex align-middle h-[60vh]"}>
      <div className="relative h-full bg-white w-[50vw] mx-auto rounded-xl border border-gray-300 flex flex-col z-10 overflow-hidden shadow-lg mb-4">
        <div className=" absolute top-0 ml-[5%] mr-[10%] h-[200px] w-[80%] mt-10 z-20">
          <div className="flex w-full">
            <div className=" p-4 bg-gray-200 size-full max-w-24 max-h-24 mt-6 rounded-full">
              <Image src="/Robotic Arm SVG Icon-01.png"
                    alt="Quick Construct Icon"
                    width="256"
                    height="256"
                    className=""/>
            </div>
            <div className="flex flex-col ml-8">
              <h1 className="font-semibold text-3xl  mt-5">Engineering UX</h1>
              <div className="flex flex-col mr-auto max-w-[90%]">
                <p className="text-gray-600 mb-4 mt-2 text-sm">Collaborating with mechanical engineering students to help build a uniform and user-friendly experience that is easy to understand and essential for operating automated robotics systems.</p>
                <Link href="./EngineeringPage" className="size-fit rounded-xl absolute top-0 right-0">
                  <div className=" mt-3 size-fit px-2 py-1 bg-gray-100 rounded-xl shadow-lg hover:cursor-pointer hover:text-[#5aa5dc] hover:scale-105 transition duration-300 ">
                      <p className="text-base">Case Study <span className="font-extrabold">→</span></p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

        </div>
        <Link href="./EngineeringPage" className="size-full rounded-xl">
          <div className="relative size-full flex flex-col hover:cursor-pointer hover:scale-110 transition duration-300">
            <div className="absolute bottom-0 right-0 flex flex-col size-full">
              <div className="min-h-[20%] relative"/>
              <Image src="/Cogs Background.png"
                    alt="QuickConstruct Mockup Thumbnail"
                    width="1470"
                    height="980"
                    className="relative max-h-[80%] w-fit ml-auto mt-auto"/>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 flex flex-col size-full">
              <div className="min-h-[40%] relative"/>
              <div className="relative max-h-[60%] w-full h-full mt-auto flex">
                <Image src="/iPad Pro mockup 13-inch top view(4).png"
                      alt="QuickConstruct Mockup Thumbnail"
                      width="1025"
                      height="800"
                      className="relative h-[80%] w-fit mx-auto mt-8 -translate-x-[20%]"/>
                
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

function returnPortfolio() {
  return (
    <div className={"flex align-middle h-[60vh]"}>
      <div className="h-full bg-white w-[40vw] mx-auto rounded-xl border border-gray-400">

      </div>
    </div>
  );
};

function returnGameDevPage() {
  return (
    <div className={"flex align-middle h-[60vh]"}>
      <div className="h-full bg-white w-[40vw] mx-auto rounded-xl border border-gray-400">

      </div>
    </div>
  );
};