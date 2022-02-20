import React from "react";

export default function Skills({ pokemon }) {
  const skills = pokemon.abilities.map((item) => {
    return item.ability.name;
  });
  return (
    <div className="">
      <h3 className="my-2 mx-auto text-2xl">Habilidades:</h3>
      <div className="flex flex-col justify-center items-center bg-indigo-100 rounded-lg max-w-xs sm:max-w-sm mx-auto">
        {skills.map((skill, index) => (
          <ul key={index} className="w-full rounded-lg">
            <li className="text-slate-900 capitalize text-lg">{skill}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
