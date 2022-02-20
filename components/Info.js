import Link from "next/link";
import React from "react";

export default function Info({ pokemon }) {
  return (
    <>
      <div className="flex items-center justify-center mt-2 text-lg">
        <div className="bg-indigo-100 rounded-l-lg flex my-4 px-4 flex-col justify-center items-center border-r-2 border-indigo-300 w-26">
          Altura:
          <h4 className="">{pokemon.height * 10} cm</h4>
        </div>
        <div className="bg-indigo-100 rounded-r-lg flex my-4 px-4 flex-col justify-center items-center w-26">
          Peso:
          <h4 className="">{pokemon.weight / 10} kg</h4>
        </div>
      </div>
    </>
  );
}
