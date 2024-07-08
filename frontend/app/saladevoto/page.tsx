"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputMask from "react-input-mask";
import { schemaCadastro } from "./schema";
import { CreateUserFormCadastro } from "./function/CreateUserFormCadastro";
import { useDadosVotos } from "@/context/votar";

export default function VotoPage() {
  const { vereador, prefeito } = useDadosVotos();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormCadastro>({
    resolver: zodResolver(schemaCadastro),
  });

  async function onSubmit(data: any) {
    console.log(data, vereador, prefeito);
    
  }

  return (
    <div className="flex h-screen bg-slate-900 items-center justify-center">
      <div className="flex bg-zinc-400 rounded shadow-lg md:w-[70%]">
        <div className="flex flex-col w-full p-4">
          <h1 className="italic text-lg text-center py-6 font-mono">
            Verificação de Autenticidade
          </h1>
          <form
            className="flex flex-col gap-4 items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col w-full gap-2 items-center">
              <div className="flex items-center">
                <InputMask
                  mask="999.999.999-99"
                  {...register("cpf", { required: true })}
                  type="text"
                  className="rounded border border-black p-1 text-black"
                  placeholder="CPF"
                />
              </div>
              {errors.cpf && <p>{errors.cpf.message?.toString()}</p>}
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className="flex items-center">
                <InputMask
                  mask="99999-999"
                  {...register("cep", { required: true })}
                  type="text"
                  className="rounded border border-black p-1 text-black"
                  placeholder="CEP"
                />
              </div>
              {errors.cep && <p>{errors.cep.message?.toString()}</p>}
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className="flex items-center">
                <InputMask
                  mask="(55) 99 99999-9999"
                  {...register("whatsapp", { required: true })}
                  type="text"
                  className="rounded border border-black p-1 text-black"
                  placeholder="Exemplo: 5511942042224"
                />
              </div>
              {errors.whatsapp && <p>{errors.whatsapp.message?.toString()}</p>}
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
