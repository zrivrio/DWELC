import { EmployeeM } from "./employee.mode";

export interface EventM {
    title: string;
    description: string;
    type: 'log' | 'warn' | 'error';
    date: Date;
    employee: EmployeeM;
  }