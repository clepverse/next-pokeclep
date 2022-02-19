import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
  return (
    <nav className="">
      <div className="">
        <Image
          src="/images/pokeball.png"
          alt="pokeclep"
          width={30}
          height={30}
        />
        <h1 className="">PokeClep</h1>
      </div>
      <ul className="">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/sobre">
            <a>Sobre</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
