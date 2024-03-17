import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <main className="bg-[#FBC5B8] h-24 w-full flex">
      <Link href="../" className="my-auto px-6">
        <Image alt="Home Button" src="/HomeIcon.png" width="50" height="50"/>
      </Link>
      <div></div>
    </main>
  );
}
