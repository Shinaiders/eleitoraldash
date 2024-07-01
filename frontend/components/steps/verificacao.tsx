"use client"
export default async function ModalVerificar() {
    return (
      <div className="fixed index-1 inset-1 flex items-center justify-center bg-slate-900">
        <div className="z-10 bg-white p-4 rounded-lg w-64">
          {/* ^ Defina a largura desejada para o modal (por exemplo, 64 pixels) */}
          <h1 className="text-xl font-semibold">Teste</h1>
        </div>
      </div>
    );
  }
