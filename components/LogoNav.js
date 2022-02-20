import Image from "next/image";

export default function LogoNav() {
  return (
    <div className="flex justify-center items-center">
      <Image src="/images/pokeball.png" alt="pokeclep" width={30} height={30} />
      <h1 className="ml-3 text-xl sm:text-3xl font-semibold">PokeClep</h1>
    </div>
  );
}
