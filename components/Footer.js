export default function Footer() {
  return (
    <footer className="flex items-center justify-center bg-gradient-to-t from-indigo-900 to-indigo-600 h-36 mt-6   text-slate-200">
      <p className="">
        <span className="font-bold">PokeClep</span> &copy;{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
