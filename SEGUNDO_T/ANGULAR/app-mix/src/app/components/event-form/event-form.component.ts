import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoggerService } from '../../services/logger.service';
import { EventM } from '../../models/event.mode';
import { CommonModule } from '@angular/common';
import { EmployeeM } from '../../models/employee.mode';
import { EmployeeService } from '../../services/employee.service';
@Component({
  selector: 'app-event-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.css'
})
export class EventFormComponent implements OnInit {
  eventForm: FormGroup;
  employees: EmployeeM[] | [] = [] ;

  constructor(private fb : FormBuilder, private loggerService: LoggerService, private employeeService : EmployeeService){
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      description : ['', Validators.required],
      type : ['log', Validators.required],
      date : ['', Validators.required],
      employee : ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(
      e => e = this.employees
    );
  }

  onSubmit(): void{
    if(this.eventForm.valid){
      const event : EventM = this.eventForm.value;
      this.loggerService.logEvent(event);
      this.eventForm.reset();
    }
  }
}
