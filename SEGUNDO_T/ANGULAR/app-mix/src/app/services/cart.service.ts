import { Injectable } from '@angular/core';
import { ProductM } from '../models/profucts.mode';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems : ProductM[] = [];

  addToCart(product: ProductM): void{
    this.cartItems.push(product);
  }

  getCartItems(): ProductM[]{
    return this.cartItems;
  }

  clearCart():void{
    this.cartItems = [];
  }

  constructor() { }
}
