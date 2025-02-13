import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Musico } from '../models/musicos';

@Injectable({
  providedIn: 'root'
})
export class MusicosService {
  private musicosSubject = new BehaviorSubject<Musico[]>([]);

  constructor() {
    this.loadMusicos();
  }

  // Método para obtener la lista de músicos como Observable
  getMusicos() {
    return this.musicosSubject.asObservable();
  }

  // Cargar músicos desde el servidor usando async/await
  private async loadMusicos() {
    try {
      const response = await fetch('http://localhost:3000/musicos');
      const data = await response.json();

      console.log("Datos recibidos:", data); // Verificar la estructura en consola
      this.musicosSubject.next(data); // Guardamos la lista de músicos
    } catch (error) {
      console.error('Error al cargar los músicos:', error);
    }
  }
}
