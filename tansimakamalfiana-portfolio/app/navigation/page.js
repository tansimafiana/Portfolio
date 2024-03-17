import Image from "next/image";
import Link from "next/link";
import Buttons from "../components/Buttons"

export default function Navigation() {
  return (
    <main className="bg-rose-100 h-24 w-full flex">
      <Link href="../" className="my-auto px-6">
        <Image alt="Home Button" src="/HomeIcon.png" width="20" height="20"/>
      </Link>
      <div className="ml-auto"> <div className=" flex top-0 right-0 h-16 w-full justify-end p-4">
              <Buttons className="text-2xl p-2 hover:text-rose-300" text="PORTFOLIO" href="../pages/PortfolioPage"/>
              <Buttons  className="text-2xl p-2 hover:text-rose-300" text="RESUME" href="../pages/ResumePage"/>
              <Buttons  className="text-2xl p-2 hover:text-rose-300" text="CONTACT" href="../pages/ContactPage" />
            </div></div>
    </main>
  );
}
