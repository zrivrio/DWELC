import { Routes } from '@angular/router';

//Importacion de las paginas a las que vamos a ir cuando pinchemos en alguna 'a'
import { EventListComponent } from './components/event-list/event-list.component';
import { EventFormComponent } from './components/event-form/event-form.component';

export const routes: Routes = [
    //Verificando que cada ruta vaya a su lugar correspondiente
    {path: '', redirectTo: '/form', pathMatch: 'full'},
    {path: 'form', component:EventFormComponent},
    {path: 'list', component:EventListComponent},
];
