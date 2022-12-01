import {Product} from "../product/product";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Basket {
  items: Item[] = [];

  addProduct(product: Product, selectedQuantity: number = 1) {
    if (this.items.map(item => item.id).some(id => id == product.id)) {
      this.items.filter(item => item.id == product.id)[0].addItem();
    } else {
      this.items.push({
        ...product,
        selectedQuantity: selectedQuantity,
        addItem: Item.prototype.addItem,
      });
    }
  }

  quantityFor(product: Product): number {
    if (this.items.map(item => item.id).some(id => id == product.id))
      return this.items.filter(item => item.id == product.id)[0].selectedQuantity;
    return 0;
  }

  get quantities() {
    return this.items
      .map(item => item.selectedQuantity)
      .reduce((total, selectedQuantity) => total + selectedQuantity, 0);
  }

  get empty(): boolean {
    return this.quantities == 0;
  };

  productHasBeenSelectedFor(product: Product): boolean {
    return this.quantityFor(product) > 0;
  };

  get totalTaxes() {
    return this.items
      .map(item => item.taxe * item.selectedQuantity)
      .reduce((total, taxe) => total + taxe, 0);
  }

  get totalWithTaxes() {
    return (Math.ceil((this.total + this.totalTaxes)*20)/20).toFixed(2);
  };

  get total() {
    return this.items
      .map(item => item.price * item.selectedQuantity)
      .reduce((total, taxe) => total + taxe, 0);
  }

  removeItem(id: string) {
    if (this.items.length > 0) {
      let index = this.items.map(value => value.id).indexOf(id, 0);
      this.items.splice(index, 1);
    }
  }
}

export class Item {
  id: string;
  name: string;
  category: string;
  price: number;
  taxe: number;
  priceWithTaxe: number;
  quantity: number;
  selectedQuantity: number;

  addItem() {
    this.selectedQuantity++;
  }
}
