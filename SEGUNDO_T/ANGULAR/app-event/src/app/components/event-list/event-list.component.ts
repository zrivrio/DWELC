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

   //Defeinimos una propiedad que es un array del tipo EventM
  //En esta propiedada se almacenara la lista de eventos
  eventos: EventM[] = [];

  //Aqui se inyecta el eventService como una dependencia
  constructor(private eventService: EventSService) {}


  //Cuando se carge la pagina se llama al evento loadEventos() para cargar los eventos alamcenados en el localStorage al inicializar el servicio
  //Ademas de que a la array que hemos creado anterior mente le pasamos todos los eventos que hemos creaado anteriormente
  ngOnInit(): void {
    this.eventService.loadEventos();
    this.eventos = this.eventService.getEventos();
  
    console.log("Eventos cargados en EventListComponent:", this.eventos);
  }

  //Creamos un metod al cual le vamos a pasar un objeto del tipo EventM
  onFilterChange(event: Event): void {
    //Obtenemos la selecion que hemos en el select que se encuntra en la vista
    const selectedValue = (event.target as HTMLSelectElement).value;

    //Si la seleccion es all mostramos todos los eventos que hemos creado
    //Si es distinto filtramos el array por la clasificacion de cada evento
    if (selectedValue === 'all') {
      this.eventos = this.eventService.getEventos();
    } else {
      this.eventos = this.eventService.getEventos().filter(ev => ev.classification === selectedValue);
    }
  }
}