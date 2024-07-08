"use client";
import { z } from "zod";
import { schemaCadastro } from "../schema";


export type CreateUserFormCadastro = z.infer<typeof schemaCadastro>;