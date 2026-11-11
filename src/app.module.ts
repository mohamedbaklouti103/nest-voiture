import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { VoituresModule } from './voitures/voitures.module.js';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [VoituresModule, ConfigModule.forRoot({
      isGlobal: true,
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
