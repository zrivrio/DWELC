import { Injectable } from '@angular/core';
import { Evento } from '../models/event-model';
import { error } from 'console';
@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private events : Evento[] = [];
  countLog =0;
  countWarn =0;
  countError =0;

  constructor() {}

  //Metdodo para registrar un evento
  addEvent( event : Evento){
    this.events.push(event);
    this.updateCounts(event.type);
    this.showCounts();
  }

  getEvents():Evento[]{
    return this.events;
  }

  filterEvents(type: 'log' | 'warn' | 'error'): Evento[] {
    return this.events.filter((event) => event.type === type);
  }

  private updateCounts(type: 'log'| 'warn'|'error'){
    switch (type){
      case 'log':
        this.countLog++;
        break;
      case 'warn':
        this.countWarn++;
        break;
      case 'error':
        this.countError++;
        break;
    }
  }

  private showCounts(){
    console.log(`Logs: ${this.countLog}, Warns: ${this.countWarn}, Errors: ${this.countError}`);
  }
}
