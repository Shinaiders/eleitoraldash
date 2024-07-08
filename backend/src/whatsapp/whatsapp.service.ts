import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { VerificarNumber } from 'src/tools/dto/verificarwhatsapp.dto';

const whatsappapi = process.env.WHATSAPP_API;
const instance = process.env.WHATSAPP_INSTANCE;

@Injectable()
export class WhatsappService {
  async VerificarZap(data: VerificarNumber) {
    console.log(data);
    const myHeaders = {
      'Content-Type': 'application/json',
      apikey: 'euamodeus',
    };

    const raw = JSON.stringify({
      number: data.number,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

    try {
      const res = await fetch(
        `${whatsappapi}/chat/fetchProfile/${instance}`,
        requestOptions,
      );      

      if (res.status === 200) {
        const responseBody = await res.json(); // Obtém o corpo da resposta
        return {
          existe: true,
          body: responseBody, // Retorna o corpo da resposta junto com o status 200
        };
      } else {
        throw new HttpException('Algo deu errado!', HttpStatus.BAD_REQUEST);
      }
    } catch (error) {
      throw new HttpException(
        'Erro ao fazer a requisição',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
