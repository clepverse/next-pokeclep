import Image from "next/image";
import Link from "next/link";
import types from "../../styles/PokemonTypes.module.css";

export const getStaticPaths = async () => {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";
  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  // params
  const paths = data.results.map((item, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.pokemonId;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  return { props: { pokemon: data } };
};

export default function Pokemon({ pokemon }) {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-semibold capitalize bg-indigo-500 text-slate-100 p-1.5 my-3 mx-auto w-72 rounded-md">
        {pokemon.name}
      </h1>
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="200"
        height="200"
        alt={pokemon.name}
      />
      <div className="">
        <h3 className="my-2 mx-auto text-2xl">Número:</h3>
        <p className="text-lg">#{pokemon.id}</p>
      </div>
      <div className="">
        <h3 className="my-2 mx-auto text-2xl">Tipo:</h3>
        <div className="flex items-center justify-center">
          {pokemon.types.map((item, index) => (
            <span
              className={`py-2 px-4 text-slate-100 bg-slate-900 mr-2 border-2 border-gray-300 rounded-md uppercase ${
                types["type_" + item.type.name]
              }`}
              key={index}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-2 text-lg">
        <div className="flex my-4 px-4 flex-col justify-center items-center border-r-2 border-indigo-300">
          Altura:
          <h4 className="">{pokemon.height * 10} cm</h4>
        </div>
        <div className="flex my-4 px-4 flex-col justify-center items-center">
          Peso:
          <h4 className="">{pokemon.weight / 10} kg</h4>
        </div>
      </div>
      <div className="mt-8">
        <Link href="/">
          <a className="font-bold text-lg text-indigo-900 transition-all duration-100 hover:text-red-500">
            Voltar
          </a>
        </Link>
      </div>
    </div>
  );
}
