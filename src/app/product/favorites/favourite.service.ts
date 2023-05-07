import { Injectable } from '@angular/core';
import { ProductsService, } from '../products.service';
import { Product } from '../product';
import { Observable, of, map } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService extends ProductsService{

  constructor() {
    super()
  }

  override getProducts(): Observable<Product> {
    let count: number = 0;
    return super.getProducts().pipe(
      filter(product => count++ < 2)
    )
  }
}
