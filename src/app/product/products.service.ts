import { Injectable } from '@angular/core';
import { Product } from './product'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() {
    console.log('Init productservice' + this)
   }

  getProducts(): Product[] {
    return [
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
    ];
  }
}
