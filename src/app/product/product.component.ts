import {Component, Input} from '@angular/core';
import {Product} from "./product";
import {Basket} from "../basket/basket";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private basket: Basket) {
  }

  selectedQuantity: number;

  get addedQuantity() {
    return this.basket.quantityFor(this.product);
  };

  @Input()
  product: Product;

  get productHasBeenSelected() {
    return this.basket.productHasBeenSelectedFor(this.product);
  };

  get productNotAvailable() {
    return !this.productAvailable;
  };

  get productAvailable() {
    return this.availableQuantity > 0;
  }

  get availableQuantity() {
    return this.product.quantity - this.addedQuantity;
  }

  addToBasket() {
    this.basket.addProduct(this.product, this.selectedQuantity);
    this.selectedQuantity = 0;
  }
}
