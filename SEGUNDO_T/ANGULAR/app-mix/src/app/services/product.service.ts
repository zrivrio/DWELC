import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductM } from '../models/profucts.mode';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductM[]>{
    return this.http.get<ProductM[]>(this.productsUrl);
  }

  getProduct(id:number):Observable<ProductM>{
    const productUrl = `http://localhost:3000/products/${id}`;
    return this.http.get<ProductM>(productUrl);
  }

}
