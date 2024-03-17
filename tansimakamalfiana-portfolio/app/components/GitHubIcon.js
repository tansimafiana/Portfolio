import Image from "next/image";
import Link from "next/link"

export default function GitHubIcon() {
  return (
    <main>
        <a target="_blank" href="https://github.com/tansimafiana">
            <Image src="/GitHub.png" width="30" height="30" className="rounded-full" />
        </a>
    </main>
  );
}
