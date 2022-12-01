import {Component} from '@angular/core';
import {Product} from "./product/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  get products(): Product[] {
    return [
      {name: 'Bob l\'éponge', category: 'figurine', price: 10},
      {name: 'Livre d\'or', category: 'note', price: 30},
      {name: 'Casrole', category: 'Ustensile', price: 25},
      {name: 'Don', category: 'Charity', price: 5},
    ];
  }
}
