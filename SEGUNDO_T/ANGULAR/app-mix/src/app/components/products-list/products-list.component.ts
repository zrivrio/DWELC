import { Component, OnInit } from '@angular/core';
import { ProductM } from '../../models/profucts.mode';
import { ProductService } from '../../services/product.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products-list',
  imports: [RouterModule, CommonModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit{
   products : ProductM[] = [];

  constructor(private producService: ProductService, private cartService: CartService){}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() : void{
    this.producService.getProducts().subscribe(products => this.products = products);
  }

  addToCart(product :ProductM): void{
    this.cartService.addToCart(product);
    alert('Producto agregado al carrito');
  }
  
}
