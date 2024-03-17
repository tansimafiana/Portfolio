import Image from "next/image";
import FionaIcon from "@/app/components/FionaIcon"
import GitHubIcon from "@/app/components/GitHubIcon"
import LinkedInIcon from "@/app/components/LinkedInIcon"
import MailIcon from "@/app/components/MailIcon"
import Buttons from "@/app/components/Buttons"

import Navigation from "@/app/navigation/page"
import { IoMdHome } from "react-icons/io";


export default function ContactPage() {
  return (
<main className="w-screen h-screen bg-rose-100 flex-col text-black">
      
            <Navigation/>

      <div className="m-auto flex  w-red-200 w-4/5 justify-center h-full">
        <div className="flex text-black align-middle py-36">

          <div className="w-64">
            <div className=" w-64">
              <div className="flex justify-center m-auto"><FionaIcon /></div>

             
            </div>
          </div>

          <div className="flex-col justify-center ">
            <h1 className=" text-6xl py-4 px-8 text-center font-extrabold">Hello! Let's Connect?</h1>
            

            <div className="px-24 mt-6 flex-col flex">
                    <button className="w-fit">
                        <a target="_blank" href="mailto:tansimakamalfiana@gmail.com" className="flex hover:text-rose-300 hover:scale-110 transition duration-300">
                            <div className="mt-2 pr-4"><MailIcon /></div>
                            <p className=" text-lg p-2">Email me</p>
                        </a>
                    </button>
                    <button className="w-fit">
                        <a target="_blank" href="https://www.linkedin.com/in/tansima-kamal-fiana" className="flex hover:text-rose-300 hover:scale-110 transform transition duration-300">
                            <div className="mt-2 pr-4"><LinkedInIcon /></div>
                            <p className=" text-lg p-2">Connect with me on LinkedIn</p>
                        </a>
                    </button>
            </div>      
          </div>
        </div>
      </div>
    </main>

           
    
  );
}