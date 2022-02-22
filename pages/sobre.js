import Image from "next/image";
import { MdContactMail } from "react-icons/md";

export default function sobre() {
  return (
    <div className="text-slate-800 flex flex-col justify-center items-center mt-20">
      <div className="bg-indigo-500 rounded-lg px-4 py-1 flex justify-center items-center mb-10">
        <h1 className="text-3xl font-semibold text-slate-100 ">
          Sobre o projeto
        </h1>
      </div>

      <p className="mx-4 mb-2 text-center">
        <span className="font-semibold">PokeClep</span> é um App construido com{" "}
        <span className="font-semibold">Next.JS</span> e{" "}
        <span className="font-semibold">TailwindCSS</span> para consultar
        Pokémons através de uma API pública
        <a
          href="https://pokeapi.co/"
          className="text-indigo-900 underline decoration-indigo-600"
        >
          (pokéAPI)
        </a>
        .
      </p>
      <p className="mb-4">
        App criado por{" "}
        <span className="font-bold text-lg text-indigo-500">
          Aldo Barbosa{" "}
          <a href="https://aldodeveloper.netlify.app/">
            <MdContactMail className="inline text-2xl" />
          </a>
        </span>
      </p>

      <Image
        src="/images/charizard.png"
        alt="charizard"
        width={300}
        height={300}
      />
    </div>
  );
}
