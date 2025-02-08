import { Employee } from "./employee.model";

export interface Evento {
  target: HTMLSelectElement;
  id: number;
  title: string;
  description: string;
  classification: 'log' | 'warn' | 'error';
  employee: Employee;
  client: string; 
  eventDate: Date;
  creationDate: Date;
}