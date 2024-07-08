import { Body, Controller, Post } from '@nestjs/common';
import { WhatsappService } from './whatsapp.service';

@Controller('whatsapp')
export class WhatsappController {
  constructor(private readonly whatsapp: WhatsappService) {}

  @Post('numberexist')
  VerificarExits(@Body() data: any) {
    return this.whatsapp.VerificarZap(data);
  }
}
