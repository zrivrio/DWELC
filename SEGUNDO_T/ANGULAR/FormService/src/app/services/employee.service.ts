import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = 'http://localhost:3000/employee';

  constructor() {}

  async getAllEmployees(): Promise<Employee[]> {
    try {
      const response = await fetch(this.url); 
      const data = await response.json(); 
      return data.employee ?? []; 
    } catch (error) {
      console.error('Error fetching employees:', error);
      return []; 
    }
  }

  async getEmployeeById(id: number): Promise<Employee | undefined> {
    const employees = await this.getAllEmployees(); 
    return employees.find(emp => emp.id === id); 
  }
}