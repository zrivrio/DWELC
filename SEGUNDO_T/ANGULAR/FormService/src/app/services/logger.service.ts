import { Injectable } from '@angular/core';
import { Evento } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private eventos: Evento[] = [];
  private countLog = 0;
  private countWarn = 0;
  private countError = 0;

  constructor() {
    this.loadEventos();
  }

  addEvento(evento: Evento): void {
    evento.id = this.eventos.length + 1;
    evento.creationDate = new Date();
    this.eventos.push(evento);
    this.updateCounts(evento.classification);
    this.saveEventos();
  }

  getEventos(): Evento[] {
    return this.eventos;
  }

  getEventosByClassification(classification: 'log' | 'warn' | 'error'): Evento[] {
    return this.eventos.filter(evento => evento.classification === classification);
  }

  getCounts() {
    return {
      log: this.countLog,
      warn: this.countWarn,
      error: this.countError
    };
  }

  private updateCounts(classification: 'log' | 'warn' | 'error'): void {
    if (classification === 'log') this.countLog++;
    else if (classification === 'warn') this.countWarn++;
    else if (classification === 'error') this.countError++;
  }

  private saveEventos(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('eventos', JSON.stringify(this.eventos));
    }
  }
  
  private loadEventos(): void {
    if (typeof localStorage !== 'undefined') {
      const eventos = localStorage.getItem('eventos');
      if (eventos) {
        this.eventos = JSON.parse(eventos);
        this.eventos.forEach(evento => this.updateCounts(evento.classification));
      }
    }
  }
}