import { Routes } from '@angular/router';
import { EventFormComponent } from './components/even-form/even-form.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventCountComponent } from './components/event-count/event-count.component';
export const routes: Routes = [
    { path: 'form', component: EventFormComponent },
    { path: 'list', component: EventListComponent },
    { path: 'count', component: EventCountComponent },
    { path: '', redirectTo: '/form', pathMatch: 'full' }
];
