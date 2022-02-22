import Link from "next/link";

export default function ListNav() {
  return (
    <ul className="flex">
      <li className="mr-2 hover:scale-110 duration-300">
        <Link href="/">
          <a className="p-2 transition-all duration-100 hover:border-b-2 border-slate-100">
            Home
          </a>
        </Link>
      </li>
      <li className="mr-2 hover:scale-110 duration-300">
        <Link href="/sobre">
          <a className="p-2 transition-all duration-100 hover:border-b-2 border-slate-100">
            Sobre
          </a>
        </Link>
      </li>
    </ul>
  );
}
