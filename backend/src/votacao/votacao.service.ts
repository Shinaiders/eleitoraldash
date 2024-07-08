import { Injectable } from '@nestjs/common';
import { CreateVotacaoDto } from './dto/create-votacao.dto';
import { UpdateVotacaoDto } from './dto/update-votacao.dto';

@Injectable()
export class VotacaoService {
  Votar(dados: any) {
    return true
  }
}
