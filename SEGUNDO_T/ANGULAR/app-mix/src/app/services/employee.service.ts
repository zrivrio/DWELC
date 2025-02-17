import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeM } from '../models/employee.mode';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeesUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient){}

  getEmployees(): Observable<EmployeeM[]>{
      return this.http.get<EmployeeM[]>(this.employeesUrl);
  }

  getProduct(id:number):Observable<EmployeeM>{
      const employeeUrl = `http://localhost:3000/employees/${id}`;
      return this.http.get<EmployeeM>(employeeUrl);
    }

}
