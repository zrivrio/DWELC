import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProvidersM } from '../models/providers';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  providers: ProvidersM[] = [];

  private url = "http://localhost:3000/providers";

  constructor(private http: HttpClient) { }

  getProciders(){
    return this.http.get<ProvidersM[]>(this.url);
  }

  


}
