import React from "react";

export default function Types({ pokemon }) {
  return (
    <div className="">
      <h3 className="my-2 mx-auto text-2xl">Tipo:</h3>
      <div className="flex items-center justify-center">
        {pokemon.types.map((item, index) => (
          <span
            className={`type ${
              item.type.name === "normal"
                ? "bg-zinc-500"
                : item.type.name === "fire"
                ? "bg-red-500"
                : item.type.name === "water"
                ? "bg-blue-500"
                : item.type.name === "electric"
                ? "bg-yellow-400"
                : item.type.name === "grass"
                ? "bg-lime-500"
                : item.type.name === "ice"
                ? "bg-cyan-400"
                : item.type.name === "fighting"
                ? "bg-orange-600"
                : item.type.name === "poison"
                ? "bg-purple-600"
                : item.type.name === "ground"
                ? "bg-amber-300"
                : item.type.name === "flying"
                ? "bg-indigo-400"
                : item.type.name === "psychic"
                ? "bg-pink-500"
                : item.type.name === "bug"
                ? "bg-green-700"
                : item.type.name === "rock"
                ? "bg-stone-400"
                : item.type.name === "ghost"
                ? "bg-indigo-200"
                : item.type.name === "dragon"
                ? "bg-fuchsia-700"
                : item.type.name === "dark"
                ? "bg-violet-900"
                : item.type.name === "steel"
                ? "bg-gray-400"
                : item.type.name === "fairy"
                ? "bg-pink-400"
                : ""
            }
              }`}
            key={index}
          >
            {item.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}
