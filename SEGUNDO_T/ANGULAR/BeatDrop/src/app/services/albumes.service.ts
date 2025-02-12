import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Musico } from '../models/musicos';

@Injectable({
  providedIn: 'root'
})
export class AlbumesService {
  private musicosSubject = new BehaviorSubject<Musico[]>([]);

  constructor() {
    this.loadAlbumes();
  }

  // Método para obtener la lista de músicos con sus álbumes
  getMusicos() {
    return this.musicosSubject.asObservable();
  }

  // Carga los álbumes desde el servidor
  private async loadAlbumes() {
    try {
      const response = await fetch('http://localhost:3000/albumes');
      const data = await response.json();

      console.log("Datos recibidos:", data); // Para verificar la estructura
      this.musicosSubject.next(data); // Guardamos la lista de músicos con sus álbumes
    } catch (error) {
      console.error('Error al cargar los álbumes:', error);
    }
  }
}