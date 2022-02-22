import Image from "next/image";

export default function LogoMain() {
  return (
    <div className="flex justify-center items-center mb-6 select-none">
      <h1 className="text-5xl text-cente font-bold text-red-600 mr-3">
        Poke<span className="text-indigo-600">Clep</span>
      </h1>
      <Image
        className="animate-bounce-slow"
        src="/images/pokeball.png"
        width="50"
        height="50"
        alt="PokeClep"
      />
    </div>
  );
}
