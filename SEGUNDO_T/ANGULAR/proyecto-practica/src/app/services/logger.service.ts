import { Injectable } from '@angular/core';
import { EventM } from '../models/eventM.model';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  contadorLog = 0;
  contadorWarn = 0;
  contadorError = 0;

  constructor() { 
    this.cargarContadores();
  }


  private cargarContadores(): void {
    const eventosGuardados = localStorage.getItem('eventos');

    if(eventosGuardados){
      const listaeventos : EventM[] = JSON.parse(eventosGuardados);
      this.contadorError = listaeventos.filter(e => e.classification === 'error').length;
      this.contadorLog = listaeventos.filter(e => e.classification === 'log').length;
      this.contadorWarn = listaeventos.filter(e => e.classification === 'warn').length;
    }
  }

  obtenerContadores(){
    return {
      log: this.contadorLog,
      warn: this.contadorWarn,
      error: this.contadorError,
    }
  }

  private guardarGontadores ( ): void {
    localStorage.setItem('contadores', JSON.stringify(this.obtenerContadores()));
  }

  actualizarContadores(classification : 'log' | 'warn' | 'error'){
    if (classification === 'log') this.contadorLog++;
    else if (classification === 'warn') this.contadorWarn++;
    else if (classification === 'error') this.contadorError++

    this.guardarGontadores();
  }
  



}
