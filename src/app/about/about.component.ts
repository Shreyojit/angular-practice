import { Component, OnInit } from '@angular/core';

import { ProductService } from '../services/api/product/product.service';
import { ProductRepresentation } from '../services/api/models/product-representation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'] // Corrected from 'styleUrl' to 'styleUrls'
})
export class AboutComponent implements OnInit {

  constructor(private service: ProductService) {}

  param: any;
  queryParam: any;

  ngOnInit(): void {
    const product: ProductRepresentation = {
      title: 'test',
      description: 'test',
      category: 'test',
      image: 'https://some-test.jpg',
      price: 10,
      rating: {
        rate: 8,
        count: 10
      }
    }; // Close the product object definition properly

    this.service.createProduct(product)
      .subscribe({
        next: (result: ProductRepresentation): void => {
          console.log(result);
        },
        error: (err: any): void => {
          console.error('Error creating product:', err);
        }
      });
  }
}
