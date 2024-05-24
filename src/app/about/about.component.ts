import { Component, OnInit } from '@angular/core';

import { ProductService } from '../services/api/product/product.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  constructor(
    private service: ProductService
  ) {

  }
param:any;
queryParam:any;

ngOnInit(): void {
  this.service.getAllProductsWithLimit().subscribe({
    next: (data) => {
      console.log(data);
    },
    error: (err) => {
      console.error('Error:', err);
    },
    complete: () => {
      console.log('Request completed');
    }
  });
}
}



