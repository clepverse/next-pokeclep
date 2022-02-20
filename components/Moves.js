import React from "react";

export default function Moves({ pokemon }) {
  const moves = pokemon.moves.map((item) => {
    return item.move.name;
  });
  return (
    <div className="mx-3 sm:mx-0">
      <h3 className="my-2 mx-auto text-2xl ">Movimentos:</h3>
      <p className="text-lg truncate max-w-2xl mx-auto capitalize">
        {moves.join(", ")}
      </p>
    </div>
  );
}
