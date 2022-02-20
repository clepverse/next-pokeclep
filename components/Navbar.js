import LogoNav from "./LogoNav";
import ListNav from "./ListNav";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-3 sm:px-12 mb-14 bg-gradient-to-b from-indigo-900 to-indigo-600 text-slate-200">
      <LogoNav />
      <ListNav />
    </nav>
  );
}
