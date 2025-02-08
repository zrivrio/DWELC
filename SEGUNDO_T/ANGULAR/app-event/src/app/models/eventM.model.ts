export interface EventM {
    id: number;
    title: string;
    description: string;
    classification: 'log' | 'warn' | 'error';
    id_employee: number;
    id_client: number;
    date: Date;
    createdAt: Date;
  }