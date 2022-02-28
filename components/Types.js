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
                ? "bg-[#aa9]"
                : item.type.name === "fire"
                ? "bg-[#f42]"
                : item.type.name === "water"
                ? "bg-[#39f]"
                : item.type.name === "electric"
                ? "bg-[#fc3]"
                : item.type.name === "grass"
                ? "bg-[#7c5]"
                : item.type.name === "ice"
                ? "bg-[#6cf]"
                : item.type.name === "fighting"
                ? "bg-[#b54]"
                : item.type.name === "poison"
                ? "bg-[#a59]"
                : item.type.name === "ground"
                ? "bg-[#db5]"
                : item.type.name === "flying"
                ? "bg-[#89f]"
                : item.type.name === "psychic"
                ? "bg-[#f59]"
                : item.type.name === "bug"
                ? "bg-[#ab2]"
                : item.type.name === "rock"
                ? "bg-[#ba6]"
                : item.type.name === "ghost"
                ? "bg-[#66b]"
                : item.type.name === "dragon"
                ? "bg-[#a10c52]"
                : item.type.name === "dark"
                ? "bg-[#37095c]"
                : item.type.name === "steel"
                ? "bg-[#aab]"
                : item.type.name === "fairy"
                ? "bg-[#e9e]"
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
