import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit, OnChanges, SimpleChanges  } from '@angular/core';
import { Product } from '../product/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit, OnChanges{

  constructor() {
    console.log(`Name is ${this.product?.name} in the constructor`);
  }

  ngOnInit(): void {
    console.log(`Name is ${this.product?.name} in the ngOnInit`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'];
    const oldValue = product.previousValue?.name;
    const newValue = product.currentValue?.name;
    console.log(`Product changed from ${oldValue} to ${newValue}`);
  }

  @Input() product: Product | undefined

  @Output() bought = new EventEmitter();

  buy() {
    this.bought.emit();
  }

  get productName(): string {
    console.log(`Get ${this.product?.name}`)
    return this.product?.name ?? 'not found'
  }

}
