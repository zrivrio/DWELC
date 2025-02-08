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
    const employee = localStorage.getItem('selectedEmployee');
    return employee ? JSON.parse(employee) : null;
  }

  private loadEmployees() {
    fetch('http://localhost:3000/employee')
      .then(response => response.json())
      .then(data => {
        this.employees = data;
      });
  }
}
