import Image from "next/image";
import Link from "next/link";
import Card from "../components/Card";

export async function getStaticProps() {
  const maxPokemons = 251;
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

export default function Home({ pokemons }) {
  return (
    <>
      <div className="flex justify-center items-center mb-10">
        <h1 className="text-5xl text-cente font-bold text-red-600 mr-3">
          Poke<span className="text-indigo-600">Clep</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="PokeClep"
        />
      </div>
      <div className="flex flex-wrap justify-between items-center max-w-5xl my-0 mx-auto">
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
