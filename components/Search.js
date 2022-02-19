export default function Search({ pesquisa, setPesquisa }) {
  return (
    <div>
      <input
        className="focus:shadow-outline block w-72 appearance-none rounded-lg border border-gray-300 bg-white py-2 px-3.5 leading-normal focus:outline-none"
        type="text"
        placeholder="Pesquisar Pokemon por nome ou ID"
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
      />
    </div>
  );
}
