import Image from "next/image";
import Link from "next/link"

import { useState, useEffect } from "react";

export default function PieChart({className, width, height, src, bgcolor}) {
  
    const [popup, setPopup] = useState(false);

    return (
    <div className="">
        <button onClick={() => setPopup(true)} className="mx-auto">
            <Image  src={src ? src : "/Piechart1.png"}
                alt="Piechart"
                width={width ? width : "800"}
                height={height ? height : "800"}
                className={className}/>
        </button>

        {/* Popup Section */}
        {popup &&
            <div className="fixed bg-black bg-opacity-70 w-screen h-screen top-0 left-0">
                <button onClick={() => setPopup(false)} className={"text-white absolute top-6 right-6 text-2xl"}>X</button> 
            
                <div className={"flex justify-center w-[90%] h-[90%] mt-[2.5%] align-middle m-auto bg-white" + (bgcolor ? bgcolor : " bg-white ")}>
                    <Image  src={src ? src : "/Piechart1.png"}
                        alt="Piechart"
                        width={width ? width : "800"}
                        height={height ? height : "800"}
                        className="w-fit h-[90%] my-auto"/>
                </div>
            </div>
        }
    </div>
  );
}
