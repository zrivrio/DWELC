import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { EventM } from '../models/eventM.model';

@Injectable({
  providedIn: 'root'
})
export class EventSService {

  private eventos: EventM[] = [];
  
  constructor(private loggerService : LoggerService){
    this.loadEventos()
  }

  addEvento(evento: EventM): void {
    console.log("Antes de agregar evento:", this.eventos);

    evento.id = this.eventos.length + 1;
    evento.createdAt = new Date();
    this.eventos.push(evento);
    
    console.log("Evento agregado:", evento);
    
    this.loggerService.updateCounts(evento.classification);
    this.saveEventos(); // Guardar en localStorage
  }

  private saveEventos(): void {
    localStorage.setItem('eventos', JSON.stringify(this.eventos)); // Usar "eventos" en plural
  }

  loadEventos(): void {
    if(typeof localStorage !=='undefined'){
      const eventosLoad = localStorage.getItem('eventos'); // Usar la misma clave "eventos"
      this.eventos = eventosLoad ? JSON.parse(eventosLoad) : [];
      if (!Array.isArray(this.eventos)) {
        this.eventos = [];
      } // Si es null, asigna un array vacío
    } else {
      this.eventos = [];
    }
    console.log("Eventos cargados:", this.eventos);
  }
  getEventos(){
    return this.eventos;
  }


}
