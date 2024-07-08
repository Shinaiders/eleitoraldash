import { Module } from '@nestjs/common';
import { VotacaoService } from './votacao.service';
import { VotacaoController } from './votacao.controller';
import { PrismaService } from 'src/prisma-client/prisma.service';

@Module({
  controllers: [VotacaoController],
  providers: [VotacaoService, PrismaService],
})
export class VotacaoModule {}
