// Importando as bibliotecas necessárias
import { Injectable } from '@nestjs/common';
import { RedisService } from 'src/redis/redis.client';
import { PrismaService } from 'src/prisma-client/prisma.service';
import fetch from 'node-fetch';
import { v4 as uuidv4 } from 'uuid';

// Definindo a interface para os artigos
interface Article {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

// Definindo a classe de serviço
@Injectable()
export class ToolsService {
  constructor(
    private readonly redis: RedisService,
    private readonly prisma: PrismaService,
  ) {}

  // Função para buscar notícias
  async Noticias() {
    // Chave para armazenar os dados no Redis
    const chaveRedis = 'noticias';

    // Verificando se os dados já estão no Redis
    const dadosNoRedis = await this.redis.get(chaveRedis);
    if (dadosNoRedis) {
      console.log('Dados recuperados do Redis');
      return JSON.parse(dadosNoRedis);
    }

    try {
      // Fazendo a requisição para a API de notícias
      const response = await fetch(
        'https://newsapi.org/v2/top-headlines?country=br&apiKey=884e3a2776764342b5bd3af11c88da06',
      );

      // Verificando se a requisição foi bem sucedida
      if (!response.ok) {
        throw new Error(
          `Erro na requisição: ${response.status} ${response.statusText}`,
        );
      }

      // Convertendo a resposta para JSON
      const noticias = await response.json();

      // Extraindo os autores e títulos dos artigos
      const artigos = noticias.articles.map((artigo: Article) => ({
        id: uuidv4(),
        author: artigo.author,
        title: artigo.title,
      }));

      // Armazene os dados no Redis com expiração de 1 hora
      await this.redis.setex(chaveRedis, 3600, JSON.stringify(artigos));
      console.log('Dados salvos no Redis');

      // Retorne os autores e títulos dos artigos
      return artigos;
    } catch (error) {
      console.error('Erro ao buscar notícias:', error.message);
      return 'Ocorreu um erro ao buscar notícias. Verifique o console para detalhes.';
    }
  }

  async versiculo() {
    try {
      const getRedis = await this.redis.get('versiculo');
      if (getRedis) {
        return JSON.parse(getRedis);
      }
      const data = JSON.stringify({
        model: 'llama3',
        prompt:
          'Versiculo biblico aleatorio pt-br relacionado a esperença com no maximo 50 caracteres',
        stream: false,
        options: {
          num_keep: 5,
          seed: 42,
          num_predict: 100,
          top_k: 100,
          top_p: 0.9,
          tfs_z: 0.5,
          typical_p: 0.7,
          repeat_last_n: 33,
          temperature: 0.8,
          repeat_penalty: 1.2,
          presence_penalty: 1.5,
          frequency_penalty: 1.0,
          mirostat: 1,
          mirostat_tau: 0.8,
          mirostat_eta: 0.6,
          penalize_newline: true,
          stop: ['\n', 'user:'],
          numa: false,
          num_ctx: 1024,
          num_batch: 2,
          num_gpu: 1,
          main_gpu: 0,
          low_vram: false,
          f16_kv: true,
          vocab_only: false,
          use_mmap: true,
          use_mlock: false,
          num_thread: 8,
        },
      });
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      };
      const res = await fetch('http://localhost:11434/api/generate', options);
      const ver = await res.json();
      await this.redis.setex('versiculo', 100, JSON.stringify(ver));

      return ver;
    } catch (error) {}
  }
}
