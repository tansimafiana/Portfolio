
import Link from "next/link";

export default function Button({text, href, className, bgcolor, scale}) {
  return (
    <div className={"transition duration-300 px-4 py-2 " + (bgcolor ? bgcolor : "") + (scale ? scale : " hover:scale-110 ")}>
        <Link className="size-full relative" href={href ? href : ""}>
            <div className={className ? className : " text-2xl p-2"} >{text ? text : "Text"}</div>
        </Link>
    </div>
  );
}
