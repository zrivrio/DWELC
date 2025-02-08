import { Injectable } from '@angular/core';
import { EmployeeM } from '../models/employeeM.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSService {
  
  private employeesSubject = new BehaviorSubject<EmployeeM[]>([]); 
  employees$ = this.employeesSubject.asObservable();

  constructor() {
    this.loadEmployees();
  }

  private async loadEmployees() {
    try {
      const response = await fetch('http://localhost:3000/employee');
      const data: EmployeeM[] = await response.json();
      this.employeesSubject.next(data); // Emitir los empleados cuando se carguen
    } catch (error) {
      console.error('Error al cargar empleados:', error);
    }
  }

  setSelectedEmployee(employee: EmployeeM) {
    localStorage.setItem('selectedEmployee', JSON.stringify(employee));
  }

  getSelectedEmployee(): EmployeeM | null {
    if (typeof localStorage !== 'undefined') {
      const storedEmployee = localStorage.getItem('selectedEmployee');
      return storedEmployee ? JSON.parse(storedEmployee) : null;
    }
    return null;
  }
}
