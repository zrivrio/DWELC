import { Injectable } from '@angular/core';
import { EventM } from '../models/event.mode';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private events : EventM[] = [];

  logEvent(event: EventM): void{
    this.events.push(event);
    localStorage.setItem('events', JSON.stringify(this.events));
  }

  getEvents() : EventM[]{
    return JSON.parse(localStorage.getItem('events') || '[]');
  }

  getEventCountByType(type: string): number{
    return this.events.filter(e => e.type === type).length;
  }

  constructor() { }
}
