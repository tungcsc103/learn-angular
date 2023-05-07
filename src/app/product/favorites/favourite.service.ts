import { Injectable } from '@angular/core';
import { ProductsService, } from '../products.service';
import { Product } from '../product';
import { Observable, of, map } from 'rxjs';
import { filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService extends ProductsService{

  override getProducts(): Observable<Product> {
    let count: number = 0;
    return super.getProducts().pipe(
      filter(product => count++ < 2)
    )
  }
}
