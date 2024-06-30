import { Module } from '@nestjs/common';
import { ToolsService } from './tools.service';
import { ToolsController } from './tools.controller';
import { PrismaService } from 'src/prisma-client/prisma.service';
import { RedisService } from 'src/redis/redis.client';


@Module({
  
  controllers: [ToolsController],
  providers: [ToolsService, PrismaService, RedisService],
})
export class ToolsModule {}
