import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EmployeeM } from '../models/employeeM.model';


@Injectable({
  providedIn: 'root'
})
export class EmplyeeService {

  private listaEmpleados = new BehaviorSubject<EmployeeM[]>([]);
  private empleadoSelecionado = new BehaviorSubject<EmployeeM | null>(null);

  constructor() { 
    this.cargarEmpleado();
  }

  obtenerEmpleados(){
    return this.listaEmpleados.asObservable();
  }

  obtenerEmpledoSelecionado(){
    return this.empleadoSelecionado.asObservable();
  }

  indicarEmpleadoSelecionado(employee :EmployeeM | null){

    this.empleadoSelecionado.next(employee);

    if(employee){
      localStorage.setItem('empleadoSelecionado', JSON.stringify(employee));
    } else{
      localStorage.removeItem('empleadoSelecionado');
    }
  }

  private cargarEmpleado(){
    fetch('http://localhost:3000/employee')
    .then(r => r.json())
  .then(d => {
    this.listaEmpleados.next(d);
  })
  .catch( e => console.error('Error al cargar los empleados:', e));
  }
}
