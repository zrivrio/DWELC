import { Routes } from '@angular/router';
import { ListarMusicosComponent } from './componets/Musicos/listar-musicos/listar-musicos.component';
import { ListarAlbumesComponent } from './componets/Albumes/listar-albumes/listar-albumes.component';
import { HomeComponent } from './componets/home/home/home.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'musicos', component:ListarMusicosComponent},
    {path:'albumes', component:ListarAlbumesComponent}
];