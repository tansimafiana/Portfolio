import Image from "next/image";
import FionaIcon from "@/app/components/FionaIcon"
import GitHubIcon from "@/app/components/GitHubIcon"
import LinkedInIcon from "@/app/components/LinkedInIcon"
import MailIcon from "@/app/components/MailIcon"
import Buttons from "@/app/components/Buttons"

import Link from "next/link"

import Navigation from "@/app/navigation/page"
import { IoMdHome } from "react-icons/io";

export default function ContactPage() {
  return (
<main className="w-screen h-screen bg-rose-100 flex-col text-black">
      
            <Navigation/>

      <div className="m-auto flex  w-red-200 w-4/5 justify-center h-full">
        <div className="flex text-black align-middle py-36">

        

          <div className="flex-col justify-center ">
            <h1 className=" text-6xl py-4 px-8 text-center font-extrabold">PORTFOLIO</h1>
            
        <div className="flex w-full justify-evenly">
        <button className="hover:text-rose-300 text-xl">
          <Link href="/pages/WebDevPage">Web Dev</Link>
        </button>
        <p>|</p>
        <button className="hover:text-rose-300 text-xl">
          <Link href="/pages/InternshipPage/Subpage">Internship</Link></button>
        <p>|</p>
        <button className="hover:text-rose-300 text-xl">
          <Link href="/pages/EngineeringPage">Engineering</Link>
        </button>
        
        
        </div>
           
            </div>      
          </div>
        </div>
      
    </main>

           
    
  );
}