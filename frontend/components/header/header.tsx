"use client";

import * as React from "react";

export default function HeaderPage() {
  return (
    <header className="flex justify-between items-center p-2">
      <h1>Votação Popular</h1>
      <nav className="flex gap-3 list-none items-center">
        <li>Pré-Candidatos</li>
        <li>Contato</li>
        <button className="flex rounded text-white p-2 transition ease-in-out delay-150 bg-emerald-500 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-400 duration-300">
          Votar
        </button>
      </nav>
    </header>
  );
}
