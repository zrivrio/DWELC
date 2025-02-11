import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Album } from '../models/albumes'; 

@Injectable({
  providedIn: 'root'
})
export class AlbumesService {
  private albumesSubject = new BehaviorSubject<Album[]>([]);

  constructor() {
    this.loadAlbumes();
  }

  
  getAlbumes() {
    return this.albumesSubject.asObservable();
  }

  addAlbum(album: Album): void {
    const albumesActuales = this.albumesSubject.getValue();
    album.id = albumesActuales.length + 1;
    const nuevosAlbumes = [...albumesActuales, album];
    this.albumesSubject.next(nuevosAlbumes);
  }

  private async loadAlbumes() {
    try {
      const response = await fetch('http://localhost:3000/albumes');
      const data: Album[] = await response.json();
      this.albumesSubject.next(data);
    } catch (error) {
      console.error('Error al cargar los álbumes:', error);
    }
  }
}
