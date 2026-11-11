import { Module } from '@nestjs/common';
import { VoituresService } from './voitures.service.js';
import { VoituresController } from './voitures.controller.js';

@Module({
  controllers: [VoituresController],
  providers: [VoituresService],
})
export class VoituresModule {}
