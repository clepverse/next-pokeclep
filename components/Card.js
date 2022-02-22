import Image from "next/image";
import Link from "next/link";

export default function Card({ pokemon }) {
  return (
    <div className="flex flex-col justify-center items-center py-4 px-2 mx-14 sm:mx-6 md:mx-2 mb-8 w-full sm:w-1/4 md:w-23 rounded-2xl border-2 border-red-600 shadow-xl shadow-indigo-900/40 bg-gradient-to-b from-indigo-600 to-indigo-500 text-slate-100 duration-300 hover:scale-110 ">
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="120"
        height="120"
        alt={pokemon.name}
      />
      <p className="my-6 bg-red-500 rounded-md p-1 flex justify-center items-center">
        #{pokemon.id}
      </p>
      <h3 className="capitalize mb-4 text-2xl font-semibold">{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}`}>
        <a className="bg-white text-slate-900 py-2.5 px-4 rounded-md transition-all duration-100 hover:bg-red-500 hover:text-slate-100">
          Detalhes
        </a>
      </Link>
    </div>
  );
}
