import { Component, EventEmitter, Output } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  @Output() added = new EventEmitter<Product>();


  constructor(private productService: ProductsService){}

  createProduct(name:string, price: number){
    this.productService.addProduct(name, price).subscribe(product => {
      this.added.emit(product)
    })
  }
}
