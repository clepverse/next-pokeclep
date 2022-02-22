import Link from "next/link";
import React from "react";

export default function Info({ pokemon }) {
  return (
    <>
      <div className="flex items-center justify-center mt-3 text-slate-900">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl">Altura:</h1>
          <h4 className="bg-indigo-100 rounded-md mx-2 py-1.5 px-4 w-26 text-lg">
            {pokemon.height * 10} cm
          </h4>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl">Peso:</h1>
          <h4 className="bg-indigo-100 rounded-md mx-2 py-1.5 px-4 w-26 text-lg">
            {pokemon.weight / 10} kg
          </h4>
        </div>
      </div>
    </>
  );
}
