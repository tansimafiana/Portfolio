import Image from "next/image";
import FionaIcon from "@/app/components/FionaIcon"
import GitHubIcon from "@/app/components/GitHubIcon"
import LinkedInIcon from "@/app/components/LinkedInIcon"
import Buttons from "@/app/components/Buttons"


export default function Home() {
  return (
    <main className="w-screen h-screen bg-rose-100 flex">
      
      <div className="m-auto w-red-200 w-4/5 justify-center">
        <div className="flex text-black">

          <div className="w-64">
            <div className=" w-64">
              <div className="flex justify-center m-auto"><FionaIcon /></div>

              <div className="py-12 px-8 flex justify-between">
                <GitHubIcon />
                <LinkedInIcon />
              </div>
            </div>
          </div>

          <div className="flex-col justify-center ">
            <h1 className=" text-6xl py-4 px-8 text-center font-extrabold">Tansima Kamal Fiana</h1>
            <h3 className=" text-4xl px-8 flex justify-center text-center font-poppinsThin">Hi, I'm Fiona! I'm a recent graduate with a passion for Web Development, UX/UI design, Project planning, and Software Development.</h3>
            
            <div className="flex w-full justify-evenly m-auto py-8 px-24">
              <Buttons text="PORTFOLIO" href="../pages/PortfolioPage"/>
              <Buttons text="RESUME" href="../pages/ResumePage"/>
              <Buttons text="CONTACT" href="../pages/ContactPage" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
