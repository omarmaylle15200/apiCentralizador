import { Controller, Body, Param,Get,Delete, Post, Put} from '@nestjs/common';
import { PersonaClientService } from './persona/persona-cliente.service';
import { Observable } from 'rxjs';

@Controller('persona')
export class AppController {
  constructor(private readonly personaClientService: PersonaClientService) {}

  @Get('getPersonas')
  getAllPersona(): Observable<any> {
    return this.personaClientService.getAllPersona();
  }

  @Get('getPersonaById/:idPersona')
  getPersona(@Param('idPersona') idPersona: number): Observable<any> {
    console.log("asar2"+JSON.stringify(idPersona));
    return this.personaClientService.getPersona(idPersona);
  }

  @Post('createPersona')
  createPersona(@Body() persona: any): Observable<any> {
    return this.personaClientService.createPersona(persona);
  }

  @Put('updatePersona')
  updatePersona(@Body() persona: any): Observable<any> {
    return this.personaClientService.updatePersona(persona);
  }

  @Delete('deletePersona/:idPersona')
  deletePersona(@Param('idPersona') idPersona: number): Observable<any> {

    let persona={
      idPersona:idPersona,
      esActivo:false
    }
    return this.personaClientService.deletePersona(persona);
  }
}