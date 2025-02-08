import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { EmployeeM } from '../../models/employeeM.model';
import { EventSService } from '../../services/event-s.service';
import { EmployeeSService } from '../../services/employee-s.service';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  imports:[CommonModule, ReactiveFormsModule, BsDatepickerModule],
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  eventForm: FormGroup;
  selectedEmployee: EmployeeM | null = null;

  bsConfig = {
    dateInputFormat: 'DD-MM-YYYY',
    isAnimated: true,
    containerClass: 'theme-blue'
  };

  constructor(
    private fb: FormBuilder,
    private eventService: EventSService,
    private employeeService: EmployeeSService
  ) {
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      classification: ['log', Validators.required],
      employee: ['', Validators.required],
      client: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Aquí obtienes el empleado seleccionado (si es que existe)
    this.employeeService.getSelectedEmployee().subscribe(employee => {
      this.selectedEmployee = employee;
      // Si se selecciona un empleado, puedes actualizar el formulario con su ID
      if (employee) {
        this.eventForm.patchValue({
          employee: employee.id
        });
      }
    });
  }

  onSubmit(): void {
    // Asegúrate de que el empleado esté seleccionado antes de enviar el formulario
    if (this.eventForm.valid && this.selectedEmployee !== null) {
      const evento = {
        ...this.eventForm.value,
        employee: this.selectedEmployee,  // Pasamos el objeto completo del empleado
        id: Date.now(),
        createdAt: new Date()
      };

      // Si el empleado es nulo, no deberíamos continuar con el envío del formulario
      this.eventService.addEvento(evento);
      this.eventForm.reset();
    } else {
      console.error('Debe seleccionar un empleado antes de enviar el formulario.');
    }
  }
}
