import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { ProductM } from '../../models/profucts.mode';
@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartItems: ProductM[] | [] = []

  constructor(private cartService: CartService){
   this.cartItems =  this.cartService.getCartItems();
  }

  clearCart(): void{
    this.cartService.clearCart();
    alert('Carrito vaciado');
  }

}
