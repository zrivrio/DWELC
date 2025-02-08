import { Component, OnInit } from '@angular/core';
import { EventSService } from '../../services/event-s.service';
import { EventM } from '../../models/eventM.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-list',
  imports: [CommonModule],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent implements OnInit {
  eventos: EventM[] = [];
  eventoPrueba: EventM;

  constructor(private eventService: EventSService) {
    this.eventoPrueba = {
      id: 1,
      title: "Evento de Prueba",
      description: "Descripción de prueba",
      classification: "log",
      employee: { id: 1, name: "Empleado Prueba" },
      client: "Cliente de Prueba",
      date: new Date(),
      createdAt: new Date(),
    };
  }

  ngOnInit(): void {
    this.eventos = this.eventService.getEventos();
    this.eventos.push(this.eventoPrueba);

    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem("evento", JSON.stringify(this.eventoPrueba));
    }
  }

  onFilterChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;

    if (selectedValue === 'all') {
      this.eventos = this.eventService.getEventos();
    } else {
      this.eventos = this.eventService.getEventos().filter(ev => ev.classification === selectedValue);
    }
  }
}
