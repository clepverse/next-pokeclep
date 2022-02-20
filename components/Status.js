import React from "react";

export default function Status({ pokemon }) {
  const statusAtr = pokemon.stats.map((item) => {
    return item.stat.name + ": " + item.base_stat;
  });
  return (
    <div className="">
      <h3 className="my-2 mx-auto text-2xl">Atributos:</h3>
      <div className="flex flex-col justify-center items-center bg-indigo-100 rounded-lg max-w-xs sm:max-w-sm mx-auto text-left">
        {statusAtr.map((item, index) => (
          <span key={index} className="capitalize text-lg">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
