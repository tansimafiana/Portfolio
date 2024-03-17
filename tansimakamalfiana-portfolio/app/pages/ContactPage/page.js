import Image from "next/image";
import FionaIcon from "@/app/components/FionaIcon"
import GitHubIcon from "@/app/components/GitHubIcon"
import LinkedInIcon from "@/app/components/LinkedInIcon"
import MailIcon from "@/app/components/MailIcon"
import Buttons from "@/app/components/Buttons"

import Navigation from "@/app/navigation/page"


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
            <h3 className=" text-4xl py-4 px-8 flex justify-center text-center font-poppinsThin">Let's chat!</h3>

            <div className="px-24">
                <div className="flex">
                    <div className="mt-2 pr-4"><MailIcon /></div>
                    <Buttons className=" text-lg p-2 hover:underline" text="Email me" href="../pages/ContactPage" />
                </div>
                <div className="flex">
                    <div className="mt-2 pr-4"><LinkedInIcon /></div>
                    <Buttons className=" text-lg p-2 hover:underline" text="Connect with me on LinkedIn" href="../pages/ContactPage" />
                </div>
            </div>      
          </div>
        </div>
      </div>
    </main>

           
    
  );
}