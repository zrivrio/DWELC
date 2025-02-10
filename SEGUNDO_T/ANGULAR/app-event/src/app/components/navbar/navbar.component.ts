import { Component, OnInit } from '@angular/core';
import { EmployeeM } from '../../models/employeeM.model';
import { EmployeeSService } from '../../services/employee-s.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  employees: EmployeeM[] = [];
  selectedEmployee: EmployeeM | null = null;

  constructor(private employeeService: EmployeeSService) {}

  ngOnInit(): void {
    // Suscribirse al observable de empleados
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees; // Asignar la lista de empleados
    });

    // Suscribirse al observable del empleado seleccionado
    this.employeeService.getSelectedEmployee().subscribe(employee => {
      this.selectedEmployee = employee; // Asignar el empleado seleccionado
    });
  }

  onEmployeeChange(event: Event): void {
    const selectedId = (event.target as HTMLSelectElement).value; // Obtener el valor seleccionado
    this.selectedEmployee = this.employees.find(emp => emp.id.toString() === selectedId) || null;
    this.employeeService.setSelectedEmployee(this.selectedEmployee); // Actualizar el empleado seleccionado
  }

}
