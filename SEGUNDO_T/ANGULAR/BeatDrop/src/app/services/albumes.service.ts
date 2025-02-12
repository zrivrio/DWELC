import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Album } from '../models/albumes'; 

@Injectable({
  providedIn: 'root'
})
export class AlbumesService {
  private albumesSubject = new BehaviorSubject<Album[]>([]); // Almacena la lista de álbumes

  constructor() {
    this.loadAlbumes();
  }

  // Método para obtener un Observable con la lista de álbumes
  getAlbumes() {
    return this.albumesSubject.asObservable();
  }

  // Método para cargar los álbumes desde la API
  private async loadAlbumes() {
    try {
      const response = await fetch('http://localhost:3000/albumes');
      const data = await response.json();

      console.log("Datos recibidos:", data); // Verificar estructura

      // Extraer todos los álbumes y aplanar la lista
      const albumesExtraidos = data.flatMap((musico: any) => musico.albumes);

      console.log("Álbumes extraídos:", albumesExtraidos); // Verificar transformación

      this.albumesSubject.next(albumesExtraidos); // Guardamos los álbumes en el observable
    } catch (error) {
      console.error('Error al cargar los álbumes:', error);
    }
  }
}
