"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { Skeleton } from "../ui/skeleton";

const backend = process.env.NEXT_PUBLIC_BACKEND;

export default function NoticiaPage() {
  const [noticias, setNoticias] = useState<noticiasUI[]>([]);

  interface noticiasUI {
    id: string;
    author: string;
    title: string;
  }

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${backend}/tools/noticias`);

        // Ensure data has valid structure before updating state
        if (
          Array.isArray(response.data) &&
          response.data.every((item: any) => !!item.id)
        ) {
          setNoticias(response.data);
        } else {
          console.warn(
            "Invalid data format received from backend. Skipping update."
          );
        }

        console.log("Fetched noticias:", response.data); // Log for debugging
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="z-0">
      {noticias.length > 0 && (
        <Slider {...settings}>
          {noticias.map((noticia: noticiasUI) => (
            <div key={noticia.id} className="flex flex-col p-2 hyphens-manual">
              <div>
                <h1 className="flex text-xl italic items-center justify-center">
                  {noticia.title}
                </h1>
              </div>
              <div className="flex py-6 justify-end">
                <span className="italic border-x-black">{noticia.author}</span>
              </div>
            </div>
          ))}
        </Slider>
      )}
      {noticias.length === 0 && (
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      )}
    </div>
  );
}
