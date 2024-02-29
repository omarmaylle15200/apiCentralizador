import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class PersonaClientService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        port: 3001, // Puerto en el que está escuchando el microservicio
      },
    });
  }

  getAllPersona(): Observable<any> {
    return this.client.send('getAllPersona', {});
  }

  getPersona(idPersona:number): Observable<any> {
    return this.client.send('getPersonaById', idPersona);
  }

  createPersona(data:any): Observable<any> {
    return this.client.send('createPersona', data);
  }

  updatePersona(data:any): Observable<any> {
    return this.client.send('updatePersona', data);
  }

  deletePersona(data:any): Observable<any> {
    return this.client.send('deletePersona', data);
  }
}