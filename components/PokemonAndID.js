import Image from "next/image";
import React from "react";

export default function PokemonAndID({ pokemon }) {
  return (
    <>
      <h1 className="text-4xl font-semibold capitalize bg-indigo-500 text-slate-100 p-1.5 my-3 mx-auto w-72 rounded-md">
        {pokemon.name}
      </h1>
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="200"
        height="200"
        alt={pokemon.name}
      />
      <div className="">
        <h3 className="my-2 mx-auto text-2xl">Número:</h3>
        <p className="text-lg font-extrabold text-red-500 ">
          <span className="text-sm font-semibold  bg-indigo-500 pt-1 px-0.5 rounded-sm text-slate-200">
            id<span className="font-bold">#</span>
          </span>
          {` ${pokemon.id}`}
        </p>
      </div>
    </>
  );
}
