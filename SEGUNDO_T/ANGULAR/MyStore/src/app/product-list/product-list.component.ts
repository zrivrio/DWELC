import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';
import { Product } from '../products'; 


@Component({
  selector: 'app-product-list',
  imports: [CommonModule,ProductAlertsComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
