import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ToolsService } from './tools.service';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';

@Controller('tools')
export class ToolsController {
  constructor(private readonly toolsService: ToolsService) {}

  @Get('noticias')
  Noticias() {
    return this.toolsService.Noticias();
  }

  @Get('versiculo')
  Versiculo() {
    return this.toolsService.versiculo()
  }
}
