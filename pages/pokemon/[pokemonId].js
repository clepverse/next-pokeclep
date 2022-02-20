import Info from "../../components/Info";
import PokemonAndID from "../../components/PokemonAndID";
import Skills from "../../components/Skills";
import Types from "../../components/Types";
import { useRouter } from "next/router";
import Moves from "../../components/Moves";
import EggGroups from "../../components/EggGroups";
import Status from "../../components/Status";
import ButtonBack from "../../components/ButtonBack";

export const getStaticPaths = async () => {
  const maxPokemons = 252;
  const api = "https://pokeapi.co/api/v2/pokemon/";
  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  // params
  const paths = data.results.map((item, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return { paths, fallback: true };
};

export const getStaticProps = async (context) => {
  const id = context.params.pokemonId;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  const esp = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  const dataEsp = await esp.json();

  return {
    props: {
      pokemon: data,
      pokemonEsp: dataEsp,
    },
  };
};

export default function Pokemon({ pokemon, pokemonEsp }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="">
        <h1 className="animate-pulse flex justify-center items-center text-4xl font-semibold capitalize bg-indigo-500 text-slate-100 p-1.5 my-3 mx-auto w-72 rounded-md">
          Carregando...
        </h1>
      </div>
    );
  }

  return (
    <div className="text-center">
      <PokemonAndID pokemon={pokemon} />

      <Types pokemon={pokemon} />

      <EggGroups pokemonEsp={pokemonEsp} />

      <Status pokemon={pokemon} />

      <Skills pokemon={pokemon} />

      {/* <Moves pokemon={pokemon} /> */}

      <Info pokemon={pokemon} />

      <ButtonBack />
    </div>
  );
}
