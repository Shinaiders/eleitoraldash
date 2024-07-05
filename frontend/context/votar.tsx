"use client";
import { useRouter } from "next/navigation";
import { ReactNode, createContext, useContext, useState } from "react";

interface dadosVotoProviderProps {
  children: ReactNode;
}

interface VotoContextProps {
  SetarVereador: (vereador: number) => void;
  SetarPrefeito: (prefeito: number) => void;
  SetarCep: (cep: any) => void;
  SetarCpf: (cpf: any) => void;
  SetarZap: (zap: any) => void;
  vereador: number | undefined;
  prefeito: number | undefined;
  cep: any | undefined;
  cpf: any | undefined;
  zap: any | undefined;
}

const dadosVotacao = createContext<VotoContextProps | undefined>(undefined);

export const useDadosVotos = () => {
  const context = useContext(dadosVotacao);
  if (!context) {
    throw new Error("nao tem dados para compartilhar");
  }
  return context;
};

export const DadosVotoContext: React.FC<dadosVotoProviderProps> = ({
  children,
}) => {
  const [vereador, setVereador] = useState<number>();
  const [prefeito, setPrefeito] = useState<number>();
  const [cep, setCep] = useState();
  const [cpf, setCpf] = useState();
  const [zap, setZap] = useState();

  function SetarVereador(vereador: number) {
    console.log("para vereador", vereador);
    setVereador(vereador);
  }
  function SetarPrefeito(prefeito: number) {
    console.log("para prefeito", prefeito);
    setPrefeito(prefeito);
  }
  function SetarCep(cep: any) {
    setCep(cep);
  }
  function SetarCpf(cpf: any) {
    setCpf(cpf);
  }
  function SetarZap(zap: any) {
    setZap(zap);
  }

  const router = useRouter();

  return (
    <dadosVotacao.Provider
      value={{
        SetarVereador,
        SetarPrefeito,
        SetarCep,
        SetarCpf,
        SetarZap,
        vereador,
        prefeito,
        cep,
        cpf,
        zap,
      }}
    >
      {children}
    </dadosVotacao.Provider>
  );
};
