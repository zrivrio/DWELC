import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { EmployeeNavbarComponent } from './components/employee-navbar/employee-navbar.component';
import { EventFormComponent } from './components/even-form/even-form.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    RouterModule,
    EmployeeNavbarComponent,
    EventFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FormService';
}
