import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product/product.service";
import {Basket} from "../basket/basket";
import {Product} from "../product/product";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private productService: ProductService,
              public basket: Basket) {
  }

  products: Product[];
  categoryFilter: string = "";

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.products = this.productService.findAllBy(this.categoryFilter);
  }
}
