import { Injectable } from '@nestjs/common';
import { CreateVoitureDto } from './dto/create-voiture.dto.js';
import { UpdateVoitureDto } from './dto/update-voiture.dto.js';

@Injectable()
export class VoituresService {
  create(createVoitureDto: CreateVoitureDto) {
    return 'This action adds a new voiture';
  }

  findAll() {
    return `This action returns all voitures`;
  }

  findOne(id: number) {
    return `This action returns a #${id} voiture`;
  }

  update(id: number, updateVoitureDto: UpdateVoitureDto) {
    return `This action updates a #${id} voiture`;
  }

  remove(id: number) {
    return `This action removes a #${id} voiture`;
  }
}
