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
export class EventListComponent implements OnInit{

  eventos: EventM[] = [];

  constructor(private eventService : EventSService){}

  ngOnInit(): void {
      this.eventos = this.eventService.getEventos();
  }

}
