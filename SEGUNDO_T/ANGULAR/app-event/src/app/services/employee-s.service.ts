import { Injectable } from '@angular/core';
import { EmployeeM } from '../models/employeeM.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSService {

  private employees: EmployeeM[] =[];

  constructor() {
    this.loadEmployees();
   }

   getEmployees(){
    return this.employees;
   }

   setSelectedEmployee(employee: EmployeeM) {
    localStorage.setItem('selectedEmployee', JSON.stringify(employee));
  }

  getSelectedEmployee(): EmployeeM | null {
    if (typeof localStorage !== 'undefined') {
      const storedEmployee = localStorage.getItem('selectedEmployee');
      return storedEmployee ? JSON.parse(storedEmployee) : null;
    }
    return null; // Retorna null si localStorage no está disponible
  }
  

  private loadEmployees() {
    fetch('http://localhost:3000/employee')
      .then(response => response.json())
      .then(data => {
        this.employees = data;
      });
  }
}
