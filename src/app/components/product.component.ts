import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  @Output() productClicked: EventEmitter<any> = new EventEmitter;

  addCart(product: Product) {
    console.log(`add to cart, from ${product.title}, ID ${product.id}`);
    this.productClicked.emit(this.product.id);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
