"use client";
import api from "@/lib/axios";

const url = process.env.NEXT_PUBLIC_BACKEND;

export default async function CheckZap(number: string) {
  try {
    const body = {
      number: number,
    };

    const res = await api.post(`${url}/whatsapp/numberexist`, body);

    if (res.status === 201) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}
