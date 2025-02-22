import { Album } from "./albumes";
import { Ubicacion } from "./ubicacion";

export interface Musico {
  id: string; 
  nombre: string; 
  genero: string; 
  nacionalidad: string;
  anio_debut: number; 
  instrumentos: string[]; 
  premios: string[]; 
  retirado: boolean; 
  imagen_url: string;
  ubicacion: Ubicacion; 
}
  


  