"use client";

import { useEffect, useRef, useState } from "react";

export default function PrefeitoPage() {
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const secondInputRef = useRef<HTMLInputElement | null>(null);

  const handleChangeOne = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setOne(value);
    console.log(value);
    if (secondInputRef.current) {
      secondInputRef.current.focus();
    }
  };

  const handleChangeTwo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTwo(value);
    console.log(value);
  };

  const handleCorrigir = () => {
    setOne("");
    setTwo("");
  };

  useEffect(() => {
    const combinedValue = one + two; // Une os valores de 'one' e 'two'
    console.log("Valor combinado:", combinedValue);

    // Agora você pode enviar 'combinedValue' para a API
  }, [one, two]);

  return (
    <div className="flex flex-col w-full h-screen bg-slate-200 items-center justify-center gap-10">
      <div>
        <h1 className="text-5xl">Para Prefeito</h1>
      </div>
      <form>
        <div className="flex gap-2 justify-center items-center">
          <input
            type="text"
            name="primario"
            value={one}
            maxLength={1}
            onChange={handleChangeOne}
            autoFocus
            className="flex border-black border-spacing-1 border-4 w-10 rounded items-center justify-center text-center p-2"
          />
          <input
            type="text"
            name="secundario"
            value={two}
            maxLength={1}
            onChange={handleChangeTwo}
            ref={secondInputRef}
            className="flex border-black border-spacing-1 border-4 w-10 rounded items-center justify-center text-center p-2"
          />
        </div>
        <div className="flex gap-2 py-6">
          <button
            onClick={handleCorrigir}
            className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-yellow-500 rounded-lg h-[50px]"
          >
            Corrigir
          </button>

          <button
            className={`inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-emerald-500 rounded-lg h-[50px] ${
              one && two ? "" : "cursor-not-allowed opacity-50"
            }`}
            disabled={!one || !two}
          >
            Confirmar
          </button>
        </div>
      </form>
    </div>
  );
}
