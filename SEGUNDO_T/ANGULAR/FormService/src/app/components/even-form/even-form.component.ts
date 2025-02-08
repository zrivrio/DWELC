import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoggerService } from '../../services/logger.service';
import { EmployeeService } from '../../services/employee.service';
import { Evento } from '../../models/event.model';
import { Employee } from '../../models/employee.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  eventForm: FormGroup;
  employees: Employee[] = [];
  selectedEmployee: Employee | undefined;
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(
    private fb: FormBuilder,
    private loggerService: LoggerService,
    private employeeService: EmployeeService
  ) {
    this.bsConfig = {
      dateInputFormat: 'YYYY-MM-DD',
      containerClass: 'theme-default',
      isAnimated: true
    };

    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      classification: ['log', Validators.required],
      client: ['', Validators.required], // Campo de texto libre para el cliente
      eventDate: ['', [Validators.required, this.validateEventDate]],
      employee: ['', Validators.required]
    });
  }

  async ngOnInit(): Promise<void> {
    console.log('EventFormComponent cargado');
    this.employees = await this.employeeService.getAllEmployees(); // Carga empleados
  
    if (typeof localStorage !== 'undefined') {
      const storedEmployeeId = localStorage.getItem('selectedEmployeeId');
      if (storedEmployeeId) {
        this.selectedEmployee = await this.employeeService.getEmployeeById(+storedEmployeeId);
        this.eventForm.patchValue({ employee: this.selectedEmployee });
      }
    }
  }

  onSubmit(): void {
    if (this.eventForm.valid) {
      const evento: Evento = {
        ...this.eventForm.value,
        employee: this.selectedEmployee!,
        client: this.eventForm.value.client, // El cliente es un string
        creationDate: new Date()
      };
      this.loggerService.addEvento(evento);
      this.eventForm.reset();
    }
  }

  validateEventDate(control: any): { [key: string]: boolean } | null {
    const selectedDate = new Date(control.value);
    const today = new Date();
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(today.getMonth() - 1);

    if (selectedDate > today || selectedDate < oneMonthAgo) {
      return { invalidDate: true };
    }
    return null;
  }
}