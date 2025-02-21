import { Component, OnInit } from '@angular/core';
import { EmployeeM } from '../../models/employee.mode';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  employees: EmployeeM[] = []; 

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(e => this.employees = e)
  }

  viewDetails(employee: EmployeeM): void {
    alert(`Detalles de ${employee.name} (ID: ${employee.id})`);
  }
}
