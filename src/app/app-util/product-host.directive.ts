import { Directive, OnInit, ViewContainerRef } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Directive({
  selector: '[appProductHost]'
})
export class ProductHostDirective implements OnInit{
  // vc: ViewContainerRef

  constructor(private vc: ViewContainerRef) {
    // this.vc = vc
  }

  ngOnInit(): void {
    const productRef = this.vc.createComponent(ProductDetailComponent);
    productRef.setInput('product', {
      name: 'Optical mouse',
      price: 130
    });
  }

}
