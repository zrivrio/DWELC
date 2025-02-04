
//Componentes necesarios para el formulario de registro de eventos
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoggerService } from '../../services/logger.service'; 
import { Evento } from '../../models/event-model';
import { Client } from '../../models/client-model';
import { Employee } from '../../models/employee-model';
import { CommonModule, NgFor } from '@angular/common';


@Component({
  selector: 'app-event-form',
  imports: [CommonModule,NgFor, FormsModule, ReactiveFormsModule ],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.css'
})
export class EventFormComponent {
  eventForm: FormGroup;
  employees: Employee [] = [
    {id:1,name:"Zahira", role:"Manager"},
    {id:2,name:"David", role:"Developer"},
  ];
  clients: Client[] = [
    {id:1,name:"Aroa", email:"aroa@example.com"},
    {id:2,name:"Juan", email:"juan@example.com"},
  ];

  constructor(private fb: FormBuilder, private loggerService : LoggerService){
    this.eventForm = this.fb.group({
      type: ['log', Validators.required],
      employee: ['', Validators.required],
      client: ['', Validators.required],
      date: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: [''],
    });
  }

  onSubmit(){
    if(this.eventForm.valid){
      const newEvent : Evento = {
        id: Date.now(),
        ...this.eventForm.value,
        createdAt: new Date(),
      };
      this.loggerService.addEvent(newEvent);
      this.eventForm.reset();
    }
  }

}
