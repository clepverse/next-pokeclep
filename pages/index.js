import Image from "next/image";
import Card from "../components/Card";
import Search from "../components/Search";
import { useState } from "react";
import LogoMain from "../components/LogoMain";

export async function getStaticProps() {
  const maxPokemons = 252;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  // add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

const pesquisarPokemons = (p, pesquisa) => {
  if (pesquisa.length === 0) {
    return p;
  }

  return p.filter((pokemon) => {
    return (
      pokemon.name.toLowerCase().includes(pesquisa.toLowerCase()) ||
      pokemon.id.toString() === pesquisa
    );
  });
};

export default function Home({ pokemons }) {
  const [pesquisa, setPesquisa] = useState("");

  return (
    <>
      <LogoMain />
      <div className="flex justify-center items-center mb-6">
        <Search pesquisa={pesquisa} setPesquisa={setPesquisa} />
      </div>
      <div className="flex flex-wrap justify-between items-center max-w-5xl my-0 mx-auto">
        {pesquisarPokemons(pokemons, pesquisa).map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
