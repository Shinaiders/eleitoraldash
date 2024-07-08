"use client";
import { z } from "zod";
import CheckZipCode from "./function/checkcep";
import CheckZap from "./function/checkzap";

export const schemaCadastro = z.object({
  cpf: z.string(),
  cep: z
    .string()
    .refine(async (cep) => await CheckZipCode(cep), {
      message: "Cep Invalido",
    }),
  whatsapp: z.string().refine(async (zap) => await CheckZap(zap), {
    message: "Esse numero de whatsapp nao existe",
  }),
});
