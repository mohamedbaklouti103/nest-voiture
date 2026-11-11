
import { Injectable, NotFoundException } from '@nestjs/common';
import { Voiture } from './entities/voiture.entity.js';
import { CreateVoitureDto } from './dto/create-voiture.dto.js';
import { UpdateVoitureDto } from './dto/update-voiture.dto.js';

@Injectable()
export class VoituresService {

  private voitures: Voiture[] = [
    { id: 1, model: "BMW M4", price: 250000, cv: 510 },
    { id: 2, model: "Mercedes C63", price: 220000, cv: 476 },
    { id: 3, model: "Audi RS6", price: 300000, cv: 600 },
  ];

  private nextId = 4;

  // GET: Find all voitures
  findAll(search?: string): Voiture[] {
    return this.voitures.filter((voiture) => {
      const searchOk = !search ||
        voiture.model.toLowerCase().includes(search.toLowerCase());

      return searchOk;
    });
  }

  // GET: Find one voiture
  findOne(id: number): Voiture {
    const voiture = this.voitures.find((v) => v.id === id);

    if (!voiture) {
      throw new NotFoundException(`Voiture ${id} introuvable`);
    }

    return voiture;
  }

  // POST: Create a voiture
  create(createVoitureDto: CreateVoitureDto): Voiture {
    const nouvelleVoiture: Voiture = {
      id: this.nextId++,
      ...createVoitureDto,
    };

    this.voitures.push(nouvelleVoiture);

    return nouvelleVoiture;
  }

  // PATCH: Update a voiture
  update(id: number, updateVoitureDto: UpdateVoitureDto): Voiture {
    const voiture = this.findOne(id);

    Object.assign(voiture, updateVoitureDto);

    return voiture;
  }

  // DELETE: Remove a voiture
  remove(id: number): Voiture {
    const voiture = this.findOne(id);

    this.voitures = this.voitures.filter((v) => v.id !== id);

    return voiture;
  }

  // GET: Statistics
  stats() {
    return {
      total: this.voitures.length,
      totalPrice: this.voitures.reduce((sum, v) => sum + v.price, 0),
      averagePrice: this.voitures.length
        ? this.voitures.reduce((sum, v) => sum + v.price, 0) / this.voitures.length
        : 0,
      totalCv: this.voitures.reduce((sum, v) => sum + v.cv, 0),
    };
  }
}
