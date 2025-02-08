import { Component, OnInit } from '@angular/core';
import { EmployeeM } from '../../models/employeeM.model';
import { EmployeeSService } from '../../services/employee-s.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  employees: EmployeeM[] = [];
  selectedEmployee: EmployeeM | null = null;

  constructor(private employeeService: EmployeeSService) {}

  ngOnInit(): void {
    // Suscribirse a employees$ para obtener los datos cuando estén listos
    this.employeeService.employees$.subscribe(data => {
      this.employees = data;
    });

    this.selectedEmployee = this.employeeService.getSelectedEmployee();
  }

  onEmployeeChange(event: Event): void {
    const selectedId = (event.target as HTMLSelectElement).value;
    const employee = this.employees.find(emp => emp.id.toString() === selectedId);
    if (employee) {
      this.selectedEmployee = employee;
      this.employeeService.setSelectedEmployee(employee);
    }
  }
}
