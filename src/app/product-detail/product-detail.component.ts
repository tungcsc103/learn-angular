import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit, OnChanges, SimpleChanges  } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit, OnChanges{

  constructor() {
    console.log(`Name is ${this.name} in the constructor`);
  }

  ngOnInit(): void {
    console.log(`Name is ${this.name} in the ngOnInit`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['name'];
    const oldValue = product.previousValue;
    const newValue = product.currentValue;
    console.log(`Product changed from ${oldValue} to ${newValue}`);
  }

  @Input() name = '';

  @Output() bought = new EventEmitter();

  buy() {
    this.bought.emit();
  }

  get productName(): string {
    console.log(`Get ${this.name}`)
    return this.name
  }

}
