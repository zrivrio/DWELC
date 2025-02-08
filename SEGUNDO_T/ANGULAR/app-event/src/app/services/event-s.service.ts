import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { EventM } from '../models/eventM.model';

@Injectable({
  providedIn: 'root'
})
export class EventSService {

  private eventos: EventM[] = [];
  
  constructor(private loggerService : LoggerService){
    
  }

  addEvento(evento: EventM ){
    evento.id = this.eventos.length + 1;
    evento.createdAt = new Date();
    this.eventos.push(evento);
    this.loggerService.updateCounts(evento.classification);
    this.saveEvento();
  }

  private saveEvento(): void{
    localStorage.setItem('eventos', JSON.stringify(this.eventos));
  }

   loadEventos(): void{
    const eventosLoad = localStorage.getItem('eventos');
    if(eventosLoad){
      this.eventos = JSON.parse(eventosLoad)
    }
  }

  getEventos(){
    return this.eventos;
  }


}
