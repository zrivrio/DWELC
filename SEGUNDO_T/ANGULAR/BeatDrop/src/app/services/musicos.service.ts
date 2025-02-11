import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Musico } from '../models/musicos';

@Injectable({
  providedIn: 'root'
})
export class MusicosService {
  private listaMusicos : Musico[] = [];

  constructor() { 
    this.loadMusicos();
  }

  getMusicos() {
    return this.listaMusicos;
  }

  addMusicos(musico : Musico): void{
    console.log("se añade");
    musico.id = this.listaMusicos.length + 1;

    this.listaMusicos.push(musico);
  }

   private loadMusicos() {
    fetch('http://localhost:3000/musicos')
      .then(response => response.json())
      .then(data => {
        this.listaMusicos.push(data); 
      })
      .catch(error => console.error('Error al cargar los empleados:', error));
  }
}
