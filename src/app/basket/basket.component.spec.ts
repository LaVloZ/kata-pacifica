import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketComponent } from './basket.component';
import {Basket} from "./basket";

describe('BasketComponent', () => {
  let component: BasketComponent;
  let fixture: ComponentFixture<BasketComponent>;
  let basket: Basket;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ BasketComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(BasketComponent);
    component = fixture.componentInstance;
    basket = TestBed.inject(Basket);
    fixture.detectChanges();
  });

  describe('not empty', () => {
    it('false if no product has been added', () => {
      expect(component.notEmpty).toBeFalse();
    });

    it('false if no product has been added', () => {
      basket.addProduct({
          id: 'ID1',
          name: 'P1',
          quantity: 1,
          taxe: 3.00,
          price: 15.00,
          priceWithTaxe: 15.00,
          category: 'C1'
      })

        expect(component.notEmpty).toBeTrue();
    });
  });
});
