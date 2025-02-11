import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Album } from '../models/albumes';

@Injectable({
  providedIn: 'root'
})
export class AlbumesService {
  private listaAlbumes : Album[] = [];

  constructor() { 
    this.loadAlbumes();
  }

  getAlbumes() {
    return this.listaAlbumes;
  }

  addAlbumes(album : Album): void{
    console.log("se añade");
    album.id = this.listaAlbumes.length + 1;

    this.listaAlbumes.push(album);
  }

   private loadAlbumes() {
    fetch('http://localhost:3000/albumes')
      .then(response => response.json())
      .then(data => {
        this.listaAlbumes.push(data); 
      })
      .catch(error => console.error('Error al cargar los empleados:', error));
  }
}
