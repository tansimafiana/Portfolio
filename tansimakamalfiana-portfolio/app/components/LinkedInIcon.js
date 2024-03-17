import Image from "next/image";
import Link from "next/link"

export default function LinkedInIcon() {
  return (
    <main>
        <a target="_blank" href="https://ca.linkedin.com/in/tansima-kamal-fiana">
            <Image className="rounded-full" src="/LinkedIn.png" width="35" height="35" />
        </a>
    </main>
  );
}
