export interface Album {
    id: number | string; 
    musico_id: string; 
    titulo: string;
    anio_lanzamiento: number;
    canciones: number; 
    duracion_total?: string; 
    genero: string;
    imagen_url: string | null;
  }