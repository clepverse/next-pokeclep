import Link from "next/link";

export default function ButtonBack() {
  return (
    <div className="my-8">
      <Link href="/">
        <a className="font-bold text-lg text-indigo-900 transition-all duration-100 hover:text-red-500">
          Voltar
        </a>
      </Link>
    </div>
  );
}
