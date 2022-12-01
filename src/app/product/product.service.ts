import {Injectable} from '@angular/core';
import {products as fetchProduct} from "./products";
import {AsyncPipe} from "@angular/common";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private asyncPipe: AsyncPipe) { }

  //should be fetched from a web service.
  findAllBy(category: string): Product[] {
    let products = this.asyncPipe.transform(fetchProduct());
    if (products == null) {
      return [];
    }
    if (category === "") {
      return products;
    }
    return products.filter(product => product.category === category);
  }
}
