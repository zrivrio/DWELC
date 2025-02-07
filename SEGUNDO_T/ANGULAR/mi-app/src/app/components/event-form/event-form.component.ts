import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';  
import { LoggerService } from '../../services/logger.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event } from '../../models/event.model';
import { Employee } from '../../models/employee.model';
import { Client } from '../../models/client.model';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'; // Importa el Datepicker

@Component({
  selector: 'app-event-form',
  standalone: true,  
  imports: [CommonModule, FormsModule, ReactiveFormsModule, BsDatepickerModule ],  
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {

  //Modificar el codigo para que utilice el localStorage 
  //Los datos deben de estar en un json, modificar para que utilice el localstorage modificar el codigo para que seleciones un empleado y se vea selecionado ese empleado
  //no hay array de clienet solo empleado
  //crear un service solo para empleados utilizar un fech para cargar los datos del son de empleados
  //si se le pone el new formControl entre parentesis y entre comillas un dato aparece ya como cat en el form y dentro de los parentesis tambien se puede poner el validator
  //formulario.value|json
  //evento debe de tener empleado tipo titulo cliente fecha y descripcion
  //crear un componente con los empleados y que s emuestren en un nav bar
  //hacer un control mas o menos como un login
  //Este va ha ser el examen del 19 solo va ha ber que cambiar cosas modificar o editar

  
  eventForm: FormGroup;

  bsConfig = {
    dateInputFormat: 'DD-MM-YYYY',
    isAnimated: true,
    containerClass: 'theme-blue'
  };
  

  employees: Employee[] = [
    { id: 1, name: 'Juan' },
    { id: 2, name: 'David' },
  ];
  clients: Client[] = [
    { id: 1, name: 'Aroa', email: 'aroa@gmail.com' },
    { id: 2, name: 'Zahira', email: 'zahira@gmail.com' },
  ];


  constructor(private fb: FormBuilder, private loggerService: LoggerService) {
    this.eventForm = this.fb.group({
      type: ['log', Validators.required],
      employee: ['', Validators.required],
      client: ['', Validators.required],
      date: [null, Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: [''],
    });
  }

  onSubmit() {
    if (this.eventForm.valid) {
      const newEvent: Event = {
        id: Date.now(),
        ...this.eventForm.value,
        createdAt: new Date(),
      };
      this.loggerService.addEvent(newEvent);
      this.eventForm.reset();
    }
  }
}
