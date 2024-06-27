"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";

export interface Noticia {
  id: number;
  tipo: string;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  link: string;
  // Adicione outras propriedades conforme necessário
}

export interface Imagem {
  image_intro: string;
  float_intro: string;
  image_intro_alt: string;
  image_intro_caption: string;
  image_fulltext: string;
  float_fulltext: string;
  image_fulltext_alt: string;
  image_fulltext_caption: string;
  // Adicione outras propriedades conforme necessário
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function NoticiaPage() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=3"
        );
        
        setDados(response.data);

        console.log("dados", dados);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex gap-4">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={5000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <h1>teste</h1>
      </Carousel>
    </div>
  );
}
