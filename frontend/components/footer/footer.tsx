"use client";
import api from "@/lib/axios";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function FooterPage() {
  const [name, setName] = useState();
  const [foto, setFoto] = useState();
  const [github, setGithub] = useState();
  const [versiculo, setVersiculo] = useState<string | string[]>();
  useEffect(() => {
    const FetchGit = async () => {
      let dados = await axios.get("https://api.github.com/users/shinaiders");
      setName(dados.data.name);
      setFoto(dados.data.avatar_url);
      setGithub(dados.data.html_url);
      console.log(dados);
      let versiculo = await api.get("/tools/versiculo");
      const formatversiculo = versiculo.data.response.split("-").join(" ");
      setVersiculo(formatversiculo);

      console.log(versiculo);
    };

    FetchGit();
  }, []);
  return (
    <div className="fixed md:flex md: justify-between p-1 bottom-0 left-0 right-0 items-center bg-slate-800">
      <div className="flex justify-center md:justify-normal items-center gap-2 p-2">
        {github && (
          <Link href={github} className="flex items-center gap-2 p-2">
            {foto && (
              <img src={foto} alt="perfil" className="flex w-10 rounded-full" />
            )}
            {name && <section className="text-white">{name}</section>}
          </Link>
        )}
      </div>
      <div>{versiculo && <span className="text-white">{versiculo}</span>}</div>
    </div>
  );
}

export default FooterPage;
