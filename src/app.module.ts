import { Module } from '@nestjs/common';
import { PersonaClientService } from './persona/persona-cliente.service';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PersonaClientService],
})
export class AppModule {}