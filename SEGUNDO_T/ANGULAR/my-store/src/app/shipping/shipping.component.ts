import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  imports: [Observable],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css'
})
export class ShippingComponent {
  constructor(private cartService: CartService) { }
  shippingCosts!: Observable<{ type: string, price: number }[]>;

  ngOnInit(): void {
    // Fetch shipping data from the CartService
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}
