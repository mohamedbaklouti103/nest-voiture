import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { VoituresModule } from './voitures/voitures.module.js';

@Module({
  imports: [VoituresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
