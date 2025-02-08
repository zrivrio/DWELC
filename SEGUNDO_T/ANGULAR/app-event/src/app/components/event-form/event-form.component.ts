import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventSService } from '../../services/event-s.service';
import { EmployeeSService } from '../../services/employee-s.service';
import { EventM } from '../../models/eventM.model';
import { EmployeeM } from '../../models/employeeM.model';

@Component({
  selector: 'app-event-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.css'
})
export class EventFormComponent implements OnInit {
  eventForm: FormGroup;
  employees : EmployeeM[] = [];

  constructor(
    private fb: FormBuilder,
    private eventService: EventSService,
    private employeeService: EmployeeSService
  ){
    this.eventForm = this.fb.group({
      title: ["Prueba1", Validators.required],
      description: [''],
      classification: ['log', Validators.required],
      employee: ['', Validators.required],
      client: ['', Validators.required],
      date: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }

  onSubmit(): void {
    if (this.eventForm.valid) {
      const evento: EventM = {
        ...this.eventForm.value,
        id: Date.now(),
        createdAt: new Date()
      };
      this.eventService.addEvento(evento);
      this.eventForm.reset();
    }
  }


}
