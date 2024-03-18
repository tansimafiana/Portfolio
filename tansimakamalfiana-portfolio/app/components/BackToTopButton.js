import Image from "next/image";
import Link from "next/link"

export default function BackToTopButton({url}) {
  return (
    <main className=" fixed bottom-0 p-16 right-0 z-40">
        <Link href={url}>
            <button className="w-24 h-24 text-6xl rounded-full bg-white border-2 drop-shadow-md border-rose-300">
                🔺
            </button>
        </Link>
    </main>
  );
}
