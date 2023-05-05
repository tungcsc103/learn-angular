import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  selectedProduct = '';
  msg: string = '';

  onBuyEvent() {
    window.alert('You just bought ${this.selectedProduct}!');
    this.msg = `User decide to buy ${this.selectedProduct}`
  }
}
