import Image from "next/image";
import Link from "next/link"

export default function MailIcon() {
  return (
    <main>
        <a target="_blank" href="mailto:tansimafiana16@gmail.com">
            <Image className="" src="/MailIcon.png" width="35" height="35" />
        </a>
    </main>
  );
}
