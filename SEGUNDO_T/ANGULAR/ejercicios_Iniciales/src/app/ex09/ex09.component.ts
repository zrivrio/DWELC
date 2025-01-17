import { Component } from '@angular/core';
import {Employee} from "../employee";
import {EMPLOYEE_LIST} from "../employee-list";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-ex09',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './ex09.component.html'
})
export class Ex09Component {
  employees: Employee[] = [];
  sortCriterio: 'name' | 'position' | 'salary' = 'name' ;

  constructor() { }

  ngOnInit(): void {
    this.employees = EMPLOYEE_LIST;
    
  }

  sortEmployees(criterio: 'name' | 'position' | 'salary' ): void {
    this.sortCriterio = criterio;
    this.employees.sort((a,b) => {
      if (typeof a[criterio] === 'string' && typeof b[criterio] === 'string') {
        return a[criterio].localeCompare(b[criterio]);
      } else if (typeof a[criterio] === 'number' && typeof b[criterio] === 'number') {
        return a[criterio] - b[criterio];
      }
      return 0;
    });
  }
}
