import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VoituresService } from './voitures.service.js';
import { CreateVoitureDto } from './dto/create-voiture.dto.js';
import { UpdateVoitureDto } from './dto/update-voiture.dto.js';

@Controller('voitures')
export class VoituresController {
  constructor(private readonly voituresService: VoituresService) {}

  @Post()
  create(@Body() createVoitureDto: CreateVoitureDto) {
    return this.voituresService.create(createVoitureDto);
  }

  @Get()
  findAll() {
    return this.voituresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.voituresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVoitureDto: UpdateVoitureDto) {
    return this.voituresService.update(+id, updateVoitureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.voituresService.remove(+id);
  }
}
