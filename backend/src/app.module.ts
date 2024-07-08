import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma-client/prisma.service';
import { ToolsModule } from './tools/tools.module';
import { WhatsappService } from './whatsapp/whatsapp.service';
import { WhatsappModule } from './whatsapp/whatsapp.module';
import { VotacaoModule } from './votacao/votacao.module';




@Module({
  imports: [ToolsModule, WhatsappModule, VotacaoModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, WhatsappService],
})
export class AppModule {}
