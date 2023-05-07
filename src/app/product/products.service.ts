import { Injectable } from '@angular/core';
import { Product } from './product'
import { Observable, of, map, mergeMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';


interface ProductDTO {
  id: number;
  title: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productsUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {
    console.log('Init productservice' + this)
   }

   getProducts(): Observable<Product> {
    return this.http.get<ProductDTO[]>(this.productsUrl)
    .pipe(
      map(dtos => dtos.map(dto => {
        return this.convertToProduct(dto)
      })),
      mergeMap(products => products)
    )
  }

  addProduct(name: string, price: number): Observable<Product> {
    return this.http.post<ProductDTO>(this.productsUrl, {
      title: name,
      price: price
    }).pipe(
      map(product => this.convertToProduct(product))
    );
  }

  updateProduct(id: number, price: number): Observable<void> {
    return this.http.patch<void>(`${this.productsUrl}/${id}`, { price });
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.productsUrl}/${id}`);
  }

  private convertToProduct(product: ProductDTO): Product {
    return {
      id: product.id,
      name: product.title,
      price: product.price
    };
  }
}
