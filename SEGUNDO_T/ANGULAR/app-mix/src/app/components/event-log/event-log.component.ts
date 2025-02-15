import { Component, OnInit } from '@angular/core';
import { EventM } from '../../models/event.mode';
import { LoggerService } from '../../services/logger.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-log',
  imports: [CommonModule],
  templateUrl: './event-log.component.html',
  styleUrl: './event-log.component.css'
})
export class EventLogComponent implements OnInit {
  events: EventM[] = [];
  filteredEvents: EventM[] = [];

  constructor(private loggerService : LoggerService){}

  ngOnInit(): void {
      this.events = this.loggerService.getEvents();
      this.filteredEvents = this.events;
  }

  filterEvents(type: string): void{
    if(type === 'all'){
      this.filteredEvents = this.events;
    }else{
      this.filteredEvents = this.events.filter( e => e.type === type);
    }
  }

  getEventCountType(type:string): number{
    return this.loggerService.getEventCountByType(type);
  }

}
