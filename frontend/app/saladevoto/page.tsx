"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { SiCeph } from "react-icons/si";
import { z } from "zod";
import InputMask from "react-input-mask";
import axios from "axios";

const schemaCadastro = z.object({
  cpf: z.string().refine(async (cpf) => await axios.get(''), {message: ""}),
  cep: z.string(),
  whatsapp: z.string(),
});

export default function VotoPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaCadastro),
  });

  async function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <div className="flex h-screen bg-slate-900 items-center justify-center">
      <div className="flex  bg-zinc-400 rounded shadow-lg">
        <div className="flex flex-col w-full p-4">
          <h1 className="italic text-lg text-center py-6 font-mono">
            Verificação de Autenticidade
          </h1>
          <form
            className="flex flex-col gap-4 items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex gap-2 items-center">
              <label className="font-mono text-xl">CPF:</label>
              <InputMask
                mask="999.999.999-99"
                {...register("cpf")}
                type="text"
                className="rounded border border-black p-1 text-black"
                placeholder="CPF"
              />

              {errors.cpf && <p>{errors.cpf.message?.toString()}</p>}
            </div>
            <div className="flex gap-2 items-center">
              <label className="font-mono text-xl">CEP:</label>
              <InputMask
                mask="99999-999"
                {...register("cep")}
                type="text"
                className="rounded border border-black p-1 text-black"
                required
                placeholder="CEP"
              />
              {errors.cep && <p>{errors.cep.message?.toString()}</p>}
            </div>
            <div className="flex gap-2 items-center">
              <label className="font-mono text-xl">WhatsApp:</label>
              <InputMask
                mask="(55) 99 99999-9999"
                {...register("whatsapp")}
                type="text"
                className="rounded border border-black p-1 text-black"
                required
                placeholder="Exemplo: 5511942042224"
              />
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
