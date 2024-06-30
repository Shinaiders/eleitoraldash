"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";

const schemaLogin = z.object({
  nome: z.string(),
  apelido: z.string(),
  img: z.custom((val) => {
    if (!val || typeof val !== "object") {
      return new Error("Imagem é obrigatória e deve ser um arquivo."); // Customize error message
    }

    const acceptedImageTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!acceptedImageTypes.includes(val.type)) {
      return new Error("Apenas imagens JPEG, PNG e GIF são permitidas."); // Customize error message
    }

    return val;
  }),
  partido: z.string(),
  numero: z.string(),
  funcao: z.enum(["prefeito", "vereador"]),
});

export default function CadastroPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaLogin),
  });

  async function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="flex flex-col py-8">Cadastro De Candidatos</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 justify-between items-center"
      >
        <div className="flex gap-2">
          <label className="italic font-medium">Nome:</label>
          <input
            type="text"
            {...register("nome")}
            className="flex bg-slate-200 rounded border border-black pl-2"
          />
          {errors.nome && <p>{errors.nome.message?.toString()}</p>}
        </div>
        <div className="flex gap-2">
          <label className="italic font-medium">Apelido:</label>
          <input
            type="text"
            {...register("apelido")}
            className="flex bg-slate-200 rounded border border-black pl-2"
          />
          {errors.apelido && <p>{errors.apelido.message?.toString()}</p>}
        </div>
        <div className="flex gap-2">
          <label className="italic font-medium">Imagem:</label>
          <input
            type="file"
            id="picture"
            {...register("img")}
            className="flex bg-slate-200 rounded border border-black pl-2"
          />
          {errors.img && <p>{errors.img.message?.toString()}</p>}
        </div>
        <div className="flex gap-2">
          <label className="italic font-medium">Partido:</label>
          <input
            type="text"
            {...register("partido")}
            className="flex bg-slate-200 rounded border border-black pl-2"
          />
          {errors.partido && <p>{errors.partido.message?.toString()}</p>}
        </div>
        <div className="flex gap-2">
          <label className="italic font-medium">Numero:</label>
          <input
            type="text"
            {...register("numero")}
            className="flex bg-slate-200 rounded border border-black pl-2"
          />
          {errors.numero && <p>{errors.numero.message?.toString()}</p>}
        </div>
        <div className="flex gap-2">
          <label className="italic font-medium">Função:</label>
          <select
            {...register("funcao")}
            className="bg-slate-200 rounded border border-black pl-2"
          >
            <option value="prefeito">Prefeito</option>
            <option value="vereador">Vereador</option>
          </select>
          {errors.funcao && <p>{errors.funcao.message?.toString()}</p>}
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}
