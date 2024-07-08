"use client";
import axios from "axios";

export default async function CheckZipCode(zip: string) {
  try {
    const response = await axios.get(
      "https://viacep.com.br/ws/" + zip + "/json/"
    );
    let data = response.data;

    if (data.erro === "true") {
      return false;
    }

    return response.data;
  } catch (error) {
    return false;
  }
}
