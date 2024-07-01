import Link from "next/link";

export default function VotoPage() {
  return (
    <div className="flex h-screen bg-slate-900 items-center justify-center">
      <div className="flex  bg-zinc-400 rounded shadow-lg">
        <div className="flex flex-col w-full p-4">
          <h1 className="italic text-lg text-center py-6 font-mono">
            Verificação de Autenticidade
          </h1>
          <form className="flex flex-col gap-4 items-center">
            <div className="flex gap-2 items-center">
              <label className="font-mono text-xl">CPF:</label>
              <input
                type="text"
                className="rounded border border-black p-1 text-black"
              />
            </div>
            <div className="flex gap-2 items-center">
              <label className="font-mono text-xl">CEP:</label>
              <input
                type="text"
                className="rounded border border-black p-1 text-black"
              />
            </div>
            <div className="flex gap-2 items-center">
              <label className="font-mono text-xl">WhatsApp:</label>
              <input
                type="text"
                className="rounded border border-black p-1 text-black"
              />
            </div>
            <div className="flex gap-4">
              <Link
                href="/"
                className="flex bg-red-600 hover:bg-red-400 text-white p-2 rounded"
              >
                Voltar
              </Link>
              <button className="flex bg-emerald-600 hover:bg-emerald-400 text-white p-2 rounded">
                Verificar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
