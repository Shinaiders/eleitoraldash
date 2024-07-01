import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private readonly maxRetries = 100;
  private readonly retryInterval = 30000; // 30 segundos

  async onModuleInit() {
    await this.connectWithRetry();
  }

  private async connectWithRetry(retryCount = 0): Promise<void> {
    try {
      await this.$connect();
      console.log('Conectado ao banco de dados!');
    } catch (error) {
      console.error(`Erro ao conectar ao banco de dados: ${error.message}`);
      if (retryCount < this.maxRetries) {
        console.log(`Tentando novamente em ${this.retryInterval / 1000} segundos...`);
        await this.wait(this.retryInterval);
        await this.connectWithRetry(retryCount + 1);
      } else {
        console.error(`Não foi possível conectar após ${this.maxRetries} tentativas. Encerrando.`);
        process.exit(1); // Encerra o aplicativo (você pode ajustar isso conforme necessário)
      }
    }
  }

  private async wait(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}