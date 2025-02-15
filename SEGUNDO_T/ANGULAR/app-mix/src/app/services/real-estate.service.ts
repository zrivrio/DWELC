import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Property } from '../models/real-estate.mode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RealEstateService {
private propertiesUrl = 'http://localhost:3000/properties';

  constructor(private http: HttpClient) { }

  getProperties(): Observable<Property[]>{
    return this.http.get<Property[]>(this.propertiesUrl);
  }

  getProperty(id:number):Observable<Property>{
    const propertyUrl = `http://localhost:3000/products/${id}`;
    return this.http.get<Property>(propertyUrl);
  }
}
