import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-3 sm:px-12 mb-14 bg-gradient-to-b from-indigo-900 to-indigo-600 text-slate-200">
      <div className="flex justify-center items-center">
        <Image
          src="/images/pokeball.png"
          alt="pokeclep"
          width={30}
          height={30}
        />
        <h1 className="ml-3 text-xl sm:text-3xl font-semibold">PokeClep</h1>
      </div>
      <ul className="flex">
        <li className="mr-2">
          <Link href="/">
            <a className="p-2 transition-all duration-100 hover:border-b-2 border-slate-100">
              Home
            </a>
          </Link>
        </li>
        <li className="mr-2">
          <Link href="/sobre">
            <a className="p-2 transition-all duration-100 hover:border-b-2 border-slate-100">
              Sobre
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
