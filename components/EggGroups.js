import React from "react";

export default function EggGroups({ pokemonEsp }) {
  const comb = "+";
  return (
    <div className="">
      <h3 className="my-2 mx-auto text-2xl">Parentalidade:</h3>
      <div className="flex flex-grow justify-center items-center bg-indigo-100 rounded-lg max-w-xs sm:max-w-sm mx-auto">
        {pokemonEsp.egg_groups.map((item, index) => (
          <span key={index} className="capitalize text-lg">
            {index === pokemonEsp.egg_groups.length - 1 ? (
              <span key={index} className="capitalize text-lg">
                {item.name}
              </span>
            ) : (
              <span key={index} className="capitalize text-lg">
                {item.name}
                <span className="text-slate-900">{comb}</span>
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
