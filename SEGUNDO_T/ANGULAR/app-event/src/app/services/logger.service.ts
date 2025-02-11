import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  //Definir tres propediades que llevaran el conteo de cuantas veces se ha llama a cada tipo de log
  countLog =0;
  countWarn =0;
  countError =0;

  constructor() {
  }

  //Merodo que devuelve un objeto con los conteos actuales de logs, warnings y errors
  //Este metodo pue eser llmado en cualquier componente o srvicio que necesite conocer el estado actual de los conteos
  getCounts() {
    return {
      log: this.countLog,
      warn: this.countWarn,
      error: this.countError
    };
  }

  //Metodo quee actualiza el conteo de los logs, warnings y de los errors
  //Recibe le parametro calisificacion que puede ser log, warn o error
  //Dependiedo del valor de esta clasificacion se incrementara el contador correpondiente
   updateCounts(classification: 'log' | 'warn' | 'error') {
    if (classification === 'log') this.countLog++;
    else if (classification === 'warn') this.countWarn++;
    else if (classification === 'error') this.countError++;
  }
}
