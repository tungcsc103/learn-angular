import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Product } from '../product/product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductsService } from '../product/products.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductsService]
})
export class ProductListComponent implements OnInit{
  selectedProduct: Product | undefined;
  products: Product[] = [];
  msg: string = '';

  @ViewChild("cardItems")
  cardItems!: ElementRef;

  // DI using constructor
  constructor(private vc: ViewContainerRef, private productService: ProductsService){
    this.title$.subscribe(this.setTitle);
  }

  ngOnInit(): void {
     this.productService.getProducts().subscribe(
      product => this.products.push(product)
     );
  }

  private setTitle = () => {
    this.msg = `Title ${Math.random()}`;
  }

  title$ = new Observable(observer => {
    setInterval(() => {
      observer.next();
    }, 2000);
  });

  onBuyEvent() {
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
    // this.msg = `User decide to buy ${this.selectedProduct}`
    const productRef = this.vc.createComponent(ProductDetailComponent);
    productRef.setInput('product', {
      name: 'Optical mouse',
      price: 130
    });

    this.cardItems.nativeElement.innerHTML = "I am changed by ElementRef & ViewChild";

  }
}
