import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { EventM } from '../models/eventM.model';

@Injectable({
  providedIn: 'root'
})
export class EventSService {

  //Defeinimos una propiedad privada que es un array del tipo EventM
  //En esta propiedada se almacenara la lista de eventos
  private eventos: EventM[] = [];
  
  //Aqui se inyecta el loggerService como una dependencia
  //Tambien se llama al evento loadEventos() para cargar los eventos alamcenados en el localStorage al inicializar el servicio
  constructor(private loggerService : LoggerService){
    this.loadEventos()
  }

  //Metodo para agregar un nuevo evento a la lista
  //Recibe el parametro de evento del tipo EventM
  addEvento(evento: EventM): void {

    //Se asigna un ID al evento basado en la longitud actual del array eventos
    //TAmbien se establece la fecha de creacion del evento como la fechay hora actual
    evento.id = this.eventos.length + 1;
    evento.createdAt = new Date();

    //Se agrega el evnto al array de eventos
    this.eventos.push(evento);
    
    //Se actualiza el contador correspondiente dependiendo de la clasificacion del evento
    this.loggerService.updateCounts(evento.classification);

    //Se guarda la lista actualizada de eventos en localStorage
    this.saveEventos(); 
  }

  //Metodo para guardar la lista de eventos en el localStorage 
  //Convierte el array evntos en una cadaena json y la almacena en el localStorage bajo la clasificacion eventos
  private saveEventos(): void {
    localStorage.setItem('eventos', JSON.stringify(this.eventos)); 
  }

  //Metodo para cargar los eventos almacenados en el localStorage
  loadEventos(): void {
    //Verificamos si el localStorage esta disponible
    if(typeof localStorage !=='undefined'){
      //Obtenemos la cadena JSON almacenada en el locarStorage bajo la clave de eventos
      const eventosLoad = localStorage.getItem('eventos');
      //Si hay datos almacenadis los parseamos a un array de objetos EventM
      //Si no hay datos inicializamos un array vacio
      this.eventos = eventosLoad ? JSON.parse(eventosLoad) : [];
      
      // Verificamos si this.eventos es un array. Si no lo es, lo inicializamos como un array vacío.
      // Esto es útil para evitar errores si los datos almacenados no tienen el formato esperado.
      if (!Array.isArray(this.eventos)) {
        this.eventos = [];
      }
    } else {
       // Si el localStorage no está disponible, inicializamos un array vacío.
      this.eventos = [];
    }
  }

   // Método para obtener la lista de eventos.
  // Devuelve el array eventos.
  getEventos(){
    return this.eventos;
  }


}
