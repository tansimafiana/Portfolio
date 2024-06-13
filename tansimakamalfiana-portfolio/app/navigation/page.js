"use client"

import Image from "next/image";
import Link from "next/link";
import Buttons from "../components/Buttons";
import { IoMdHome } from "react-icons/io";
import React, { useState, useEffect } from "react"

export default function Navigation({subpage}) {
  
  let url;
  
  if (typeof window !== "undefined") {
    url = String(window.location);
  }
  const [ID, setID] = useState(0);

  useEffect(() => {
    if (url.includes("PortfolioPage")) {
      setID(1);
    } else if (url.includes("ResumePage")) {
      setID(2);
    } else if (url.includes("ContactPage")) {
      setID(3);
    }
    console.log(ID);
  }, [url]);

  return (
    <main className="bg-white h-24 w-screen flex">
      <Link href="../" className="my-auto px-6 pb-6">
        <IoMdHome className="w-8 h-8 mt-6 ml-6 hover:scale-110 transition duration-300"/>
      </Link>
      <div className="ml-auto">
        <div className=" flex top-0 right-0 h-16 w-full justify-end p-4">
          <Buttons className="text-2xl p-2 hover:text-[#ffee32]" text="PORTFOLIO" href={ subpage ? "../PortfolioPage" : "../pages/PortfolioPage"} scale={ ID === 1 ? " text-[#ffee32] scale-110 " : " hover:scale-110 "}/>
          <Buttons  className="text-2xl p-2 hover:text-[#f77f00]" text="RESUME" href={ subpage ? "../ResumePage" : "../pages/ResumePage"} scale={ ID === 2 ? " text-[#f77f00] scale-110 " : " hover:scale-110 "}/>
          <Buttons  className="text-2xl p-2 hover:text-[#ED4672]" text="CONTACT" href={ subpage ? "../ContactPage" : "../pages/ContactPage"} scale={ ID === 3 ? " text-[#ED4672] scale-110 " : " hover:scale-110 "}/>
        </div>
      </div>
    </main>
  );
}
