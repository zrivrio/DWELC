import { Component } from '@angular/core';
import { LoggerService } from '../../services/logger.service';
import { Evento } from '../../models/event-model'; 
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa estos módulos

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  imports: [CommonModule, NgFor, FormsModule, ReactiveFormsModule],
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  events: Evento[] = []; // Lista donde se almacenan los eventos obtenidos del servicio
  filterType: 'all' | 'log' | 'warn' | 'error' = 'all';


  constructor(private loggerService: LoggerService) {
    this.events = this.loggerService.getEvents();
  }
  get filteredEvents(): Evento[] {
    if (this.filterType === 'all') {
      return this.events;
    }
    return this.loggerService.filterEvents(this.filterType);
  }

  get eventCounts() {
    return {
      log: this.loggerService.countLog,
      warn: this.loggerService.countWarn,
      error: this.loggerService.countError,
    };
  }
}