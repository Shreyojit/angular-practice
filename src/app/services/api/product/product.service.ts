import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductRepresentation } from '../models/product-representation';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) { }

  getAllProductsWithLimit(limit: number = 5): Observable<ProductRepresentation[]> {
    const prodUrl: string = `${this.baseUrl}products?limit=${limit}`;
    return this.http.get<ProductRepresentation[]>(prodUrl);
  }

  createProduct(product: ProductRepresentation): Observable<ProductRepresentation> {
    const prodUrl = `${this.baseUrl}products`;
    return this.http.post<ProductRepresentation>(prodUrl, product);
  }
}
