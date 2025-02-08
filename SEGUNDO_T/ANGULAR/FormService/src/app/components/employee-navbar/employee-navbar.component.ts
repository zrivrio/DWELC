import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-navbar',
  templateUrl: './employee-navbar.component.html',
  imports:[CommonModule],
  styleUrls: ['./employee-navbar.component.css']
})
export class EmployeeNavbarComponent implements OnInit {
  employees: Employee[] = [];
  selectedEmployee: Employee | undefined ;

  constructor(private employeeService: EmployeeService) {}

  async ngOnInit(): Promise<void> {
    this.employees = await this.employeeService.getAllEmployees();
  
    if (typeof window !== 'undefined' && localStorage) {
      const storedEmployeeId = localStorage.getItem('selectedEmployeeId');
      if (storedEmployeeId) {
        this.selectedEmployee = await this.employeeService.getEmployeeById(+storedEmployeeId);
      }
    }
  }
  
  async onEmployeeSelect(employeeId: number): Promise<void> {
    this.selectedEmployee = await this.employeeService.getEmployeeById(employeeId);
    
    if (typeof window !== 'undefined' && localStorage) { // 👈 Verifica antes de usar
      localStorage.setItem('selectedEmployeeId', employeeId.toString());
    }
  }
  
}