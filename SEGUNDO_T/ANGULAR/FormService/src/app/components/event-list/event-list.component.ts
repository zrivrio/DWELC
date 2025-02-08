import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../services/logger.service';
import { Evento } from '../../models/event.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-list',
  imports: [CommonModule],
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  eventos: Evento[] = [];
  filter: 'all' | 'log' | 'warn' | 'error' = 'all';

  constructor(private loggerService: LoggerService) {}

  ngOnInit(): void {
    this.eventos = this.loggerService.getEventos();
  }

  getFilteredEventos(): Evento[] {
    if (this.filter === 'all') {
      return this.eventos;
    } else {
      return this.eventos.filter(event => event.classification === this.filter);
    }
  }

  onFilterChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.filter = target.value as 'all' | 'log' | 'warn' | 'error';
  }
}
