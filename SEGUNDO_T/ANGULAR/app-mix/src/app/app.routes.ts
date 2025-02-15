import { Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { CartComponent } from './components/cart/cart.component';
import { EventLogComponent } from './components/event-log/event-log.component';
import { EventFormComponent } from './components/event-form/event-form.component';
import { RealEstateComponent } from './components/real-estate/real-estate.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: 'products', component: ProductsListComponent },
  { path: 'products/:productId', component: ProductsDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'event-log', component: EventLogComponent },
  { path: 'event-form', component: EventFormComponent },
  { path: 'real-estate', component: RealEstateComponent },
  { path: 'login', component: LoginComponent },
];
