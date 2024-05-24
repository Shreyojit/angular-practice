import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = 'https://fakestoreapi.com/'

  constructor(
    private http: HttpClient
  ) { }

 
  getAllProductsWithLimit(limit: number=5) : Observable<Object> {

    const prodUrl: string = `${this.baseUrl}products?limit=${limit}`;
    return this.http.get<any>(prodUrl)
  }

}
