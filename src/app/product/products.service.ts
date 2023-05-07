import { Injectable } from '@angular/core';
import { Product } from './product'
import { Observable, of, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products = [
    {
      name: 'Webcam',
      price: 100
    },
    {
      name:  'Microphone',
      price: 200
    },
    {
      name: 'Wireless keyboard',
      price: 85
    }
  ]

  constructor() {
    console.log('Init productservice' + this)
   }

   getProducts(): Observable<Product> {
    return from(this.products);
  }
}
