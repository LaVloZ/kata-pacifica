import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductComponent} from './product.component';
import {FormsModule} from "@angular/forms";

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      imports: [ FormsModule ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = {name: "product", category: "category", price: 10, taxe: 10, priceWithTaxe: 20, quantity: 1, id: 'PRODUCT'};

    fixture.detectChanges();
  });

  describe("quantity", () => {

    describe("add to basket", () => {

      it("if there's only one quantity left should not be available", () => {
        component.addToBasket();

        expect(component.productAvailable).toBeFalse();
      });

      it("if there's more than one quantity left should be trigger product availability", () => {
        component.product = {name: "product", category: "category", price: 10, taxe: 10, priceWithTaxe: 20, quantity: 10, id: 'PRODUCT'};

        component.addToBasket();

        expect(component.productAvailable).toBeTrue();
      });

      it("reset selected quantity", () => {
        component.product = {name: "product", category: "category", price: 10, taxe: 10, priceWithTaxe: 20, quantity: 10, id: 'PRODUCT'};
        component.selectedQuantity = 2;

        component.addToBasket();

        expect(component.selectedQuantity).toEqual(0);
      });
    });

    describe("display", () => {
      it("display it when is available", () => {
        expect(component.productAvailable).toBeTrue();
      });

      it("don't display it when is not available", () => {
        component.product.quantity = 0;
        expect(component.productAvailable).toBeFalse();
      });
    });
  });
});
