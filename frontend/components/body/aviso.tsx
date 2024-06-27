export default function AvisoPage() {
  return (
    <div className="flex flex-col justify-center items-center py-6 font-mono ">
      <div className="flex flex-col gap-4">
        <h1 className="flex text-3xl items-center justify-center italic">
          {" "}
          Seja Bem vindo
        </h1>
        <h2 className="flex justify-center items-center sm:pl-32 sm:pr-32 p-4">
          Vote com confiança! Nosso site permite que você participe das eleições
          locais de Mogi das Cruzes de forma segura e anônima. Vote nos
          vereadores e prefeito da cidade, sabendo que sua escolha é totalmente
          secreta. Junte-se a nós para fortalecer a democracia local!” 🗳️🔒
        </h2>
      </div>
      <div className="flex gap-2">
        <button className="flex bg-indigo-500 hover:bg-indigo-400 p-2 rounded">
          <span className="text-white">Candidatos</span>
        </button>
        <button className="flex bg-gradient-to-r from-emerald-500 to-indigo-400 hover:from-emerald-400 hover:to-indigo-300 text-white justify-center items-center p-2 rounded">
          <span>Votar</span>
        </button>
      </div>
    </div>
  );
}
