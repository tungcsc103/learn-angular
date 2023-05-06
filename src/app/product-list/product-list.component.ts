import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Product } from '../product/product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  selectedProduct: Product | undefined;
  products: Product[] = [
    {
      name: 'Webcam',
      price: 100
    },
    {
      name:  'Microphone',
      price: 200
    },
    {
      name: 'Keyboard',
      price: 85
    }
  ];
  msg: string = '';

  @ViewChild("cardItems")
  cardItems!: ElementRef;

  constructor(private vc: ViewContainerRef){}

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
