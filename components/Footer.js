import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center bg-gradient-to-t from-indigo-900 to-indigo-600 h-28 text-slate-200 sm:max-w-7xl sm:mx-auto sm:rounded-t-xl">
      <ul className="flex flex-row mx-4 text-4xl">
        <li className="mr-2">
          <a href="https://github.com/metaclep" target="_blank ">
            <FaGithub className="text-indigo-100" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/aldo-barbosa-055604230/"
            target="_blank "
          >
            <FaLinkedin className="text-indigo-100" />
          </a>
        </li>
      </ul>
      <p className="">
        <span className="font-bold">PokeClep</span> &copy;{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
