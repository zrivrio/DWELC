import { Album } from "./albumes";
import { Ubicacion } from "./ubicacion";
export interface Musico {
    id: number;
    nombre: string;
    genero: string;
    nacionalidad: string;
    anio_debut: number;
    instrumentos: string[];
    premios: string[];
    retirado: boolean;
    imagen_url: string;
    ubicacion: Ubicacion;
    albumes?: Album[]; // Relación opcional con los álbumes
  }
  


  