import Image from "next/image";
import Link from "next/link"

export default function Button({text, href}) {
  return (
    <main>
        <Link href={href ? href : ""}>
            <button className=" text-2xl p-2 hover:underline">{text ? text : "Text"}</button>
        </Link>
    </main>
  );
}
