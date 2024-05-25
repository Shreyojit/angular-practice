import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/api/product/product.service';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: ProductRepresentation[] = [];

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.getAllProductsWithLimit().subscribe({
      next: (result: ProductRepresentation[]) => {
        this.products = result;
      },
      error: (err: HttpErrorResponse) => {
        console.error('Error fetching products:', err);
      }
    });
  }
}
