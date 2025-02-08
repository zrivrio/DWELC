import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EmployeeM } from '../models/employeeM.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSService {
  
  private employeesSubject = new BehaviorSubject<EmployeeM[]>([]); // Emisor de empleados
  private selectedEmployeeSubject = new BehaviorSubject<EmployeeM | null>(null);

  constructor() {
    this.loadEmployees();
  }

  // Obtener el observable de empleados
  getEmployees() {
    return this.employeesSubject.asObservable(); // Retorna un observable
  }

  // Obtener el observable del empleado seleccionado
  getSelectedEmployee() {
    return this.selectedEmployeeSubject.asObservable();
  }

  // Establecer el empleado seleccionado
  setSelectedEmployee(employee: EmployeeM | null) {
    this.selectedEmployeeSubject.next(employee);  // Emitir el nuevo empleado seleccionado
    if (employee) {
      localStorage.setItem('selectedEmployee', JSON.stringify(employee));
    } else {
      localStorage.removeItem('selectedEmployee');  // Si es null, eliminamos el item
    }
  }

  // Cargar empleados (simulado aquí como un fetch)
  private loadEmployees() {
    fetch('http://localhost:3000/employee')
      .then(response => response.json())
      .then(data => {
        this.employeesSubject.next(data); // Emitir los empleados al BehaviorSubject
      })
      .catch(error => console.error('Error al cargar los empleados:', error));
  }
}
