export interface Evento {
    id: number;
    type: 'log' | 'warn' | 'error'; // Tipo de evento
    employee: string; 
    client: string;
    date: Date; 
    createdAt: Date; 
    title: string; 
    description: string; 
    status?: string;
  }