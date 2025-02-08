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
export class NavbarComponent implements OnInit{

  employees : EmployeeM[] = [];
  selectedEmployee: EmployeeM | null = null;

  constructor(private employeeService: EmployeeSService) {}
  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
    this.selectedEmployee = this.employeeService.getSelectedEmployee();
  }

  onEmployeeChange(event: Event): void {
    const selectedId = (event.target as HTMLSelectElement).value; // Obtener ID seleccionado
    this.selectedEmployee = this.employees.find(emp => emp.id.toString() === selectedId) || null; // Buscar empleado
    this.employeeService.setSelectedEmployee(this.selectedEmployee!); // Guardar empleado seleccionado
  }
  
}
