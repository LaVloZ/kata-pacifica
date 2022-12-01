import { Component } from '@angular/core';
import {Basket} from "./basket";

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {

  constructor(public basket: Basket) {
  }

  get notEmpty() {
    return !this.basket.empty;
  }
}
