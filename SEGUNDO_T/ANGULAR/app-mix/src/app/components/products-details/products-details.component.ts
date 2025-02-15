import { Component, OnInit } from '@angular/core';
import { ProductM } from '../../models/profucts.mode';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-details',
  imports: [CommonModule],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent implements OnInit{
  product!: ProductM;

  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService){}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.productService.getProduct(productIdFromRoute).subscribe( p => this.product = p);
  }

  addToCart(productAdd : ProductM): void{
    this.cartService.addToCart(productAdd);
  alert('Producto agregado al carrito')
  }
}
