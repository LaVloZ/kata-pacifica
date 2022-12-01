import {TestBed} from "@angular/core/testing";
import {Basket} from "./basket";

describe('Basket', () => {
  let basket: Basket;
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [],
      providers: [
        Basket
      ],
    });
    basket = TestBed.inject(Basket);
  });

  describe('total items', () => {
    it('no product added', () => {
      expect(basket.quantities).toEqual(0);
    });

    it('one product added', () => {
      basket.addProduct({
        id: 'ID1',
        name: 'P1',
        quantity: 1,
        taxe: 3.00,
        price: 15.00,
        priceWithTaxe: 18.00,
        category: 'C1'
      });

      expect(basket.quantities).toEqual(1);
    });

    it('same product two time added', () => {
      basket.addProduct({
        id: 'ID1',
        name: 'P1',
        quantity: 1,
        taxe: 3.00,
        price: 15.00,
        priceWithTaxe: 18.00,
        category: 'C1'
      });
      basket.addProduct({
        id: 'ID1',
        name: 'P1',
        quantity: 1,
        taxe: 3.00,
        price: 15.00,
        priceWithTaxe: 18.00,
        category: 'C1'
      });

      expect(basket.quantities).toEqual(2);
    });

    it('different products added', () => {
      basket.addProduct({
        id: 'ID1',
        name: 'P1',
        quantity: 1,
        taxe: 3.00,
        price: 15.00,
        priceWithTaxe: 18.00,
        category: 'C1'
      });
      basket.addProduct({
          id: 'ID2',
          name: 'P2',
          quantity: 1,
          taxe: 3.00,
          price: 15.00,
          priceWithTaxe: 18.00,
          category: 'C1'
      });

      expect(basket.quantities).toEqual(2);
    });

    describe('taxes', () => {
      it('no product', () => {
        expect(basket.totalTaxes).toEqual(0);
      });

      it('one product', () => {
        basket.addProduct({
          id: 'ID1',
          name: 'P1',
          quantity: 1,
          taxe: 3.00,
          price: 15.00,
          priceWithTaxe: 18.00,
          category: 'C1'
        });

        expect(basket.totalTaxes).toEqual(3);
      });

      it('same product added two times', () => {
        basket.addProduct({
          id: 'ID1',
          name: 'P1',
          quantity: 1,
          taxe: 3.00,
          price: 15.00,
          priceWithTaxe: 18.00,
          category: 'C1'
        });
        basket.addProduct({
          id: 'ID1',
          name: 'P1',
          quantity: 1,
          taxe: 3.00,
          price: 15.00,
          priceWithTaxe: 18.00,
          category: 'C1'
        });

        expect(basket.totalTaxes).toEqual(6);
      });

      it('different products added', () => {
        basket.addProduct({
          id: 'ID1',
          name: 'P1',
          quantity: 1,
          taxe: 3.00,
          price: 15.00,
          priceWithTaxe: 18.00,
          category: 'C1'
        });
        basket.addProduct({
          id: 'ID2',
          name: 'P2',
          quantity: 1,
          taxe: 4.00,
          price: 15.00,
          priceWithTaxe: 19.00,
          category: 'C1'
        });

        expect(basket.totalTaxes).toEqual(7);
      });
    });

    describe('total with taxes', () => {
      it('no product', () => {
        expect(basket.totalWithTaxes).toEqual('0.00');
      });

      it('one product', () => {
        basket.addProduct({
          id: 'ID1',
          name: 'P1',
          quantity: 1,
          taxe: 3.00,
          price: 15.00,
          priceWithTaxe: 18.00,
          category: 'C1'
        });

        expect(basket.totalWithTaxes).toEqual('18.00');
      });

      it('same product added two times', () => {
        basket.addProduct({
          id: 'ID1',
          name: 'P1',
          quantity: 1,
          taxe: 3.00,
          price: 15.00,
          priceWithTaxe: 18.00,
          category: 'C1'
        });
        basket.addProduct({
          id: 'ID1',
          name: 'P1',
          quantity: 1,
          taxe: 3.00,
          price: 15.00,
          priceWithTaxe: 18.00,
          category: 'C1'
        });

        expect(basket.totalWithTaxes).toEqual('36.00');
      });

      it('different products added', () => {
        basket.addProduct({
          id: 'ID1',
          name: 'P1',
          quantity: 1,
          taxe: 3.00,
          price: 15.00,
          priceWithTaxe: 18.00,
          category: 'C1'
        });
        basket.addProduct({
          id: 'ID2',
          name: 'P2',
          quantity: 1,
          taxe: 4.00,
          price: 20.00,
          priceWithTaxe: 24.00,
          category: 'C1'
        });

        expect(basket.totalWithTaxes).toEqual('42.00');
      });
    });
  });

  describe('product has been selected', () => {
    it('return false', () => {
      const product = {id: 'ID1', name: 'P1', quantity: 1, taxe: 3.00, price: 15.00, priceWithTaxe: 18.00, category: 'C1'};

      expect(basket.productHasBeenSelectedFor(product)).toEqual(false);
    });

    it('return true', () => {
      const product = {id: 'ID1', name: 'P1', quantity: 1, taxe: 3.00, price: 15.00, priceWithTaxe: 18.00, category: 'C1'};

      basket.addProduct(product);

      expect(basket.productHasBeenSelectedFor(product)).toEqual(true);
    });
  });

  describe('remove item', () => {
    it('remove from an empty basked', () => {
      basket.removeItem('ID1');

      expect(basket.quantities).toEqual(0);
    });

    it('remove product', () => {
      basket.addProduct({
        id: 'ID1',
        name: 'P1',
        quantity: 1,
        taxe: 3.0,
        price: 15,
        priceWithTaxe: 18.00,
        category: 'C1'
      });

      basket.removeItem('ID1');

      expect(basket.quantities).toEqual(0);
    });

    it('remove product with quantity of 2', () => {
      basket.addProduct({
        id: 'ID1',
        name: 'P1',
        quantity: 1,
        taxe: 3.0,
        price: 15,
        priceWithTaxe: 18.00,
        category: 'C1'
      });
      basket.addProduct({
        id: 'ID1',
        name: 'P1',
        quantity: 1,
        taxe: 3.0,
        price: 15,
        priceWithTaxe: 18.00,
        category: 'C1'
      });

      basket.removeItem('ID1');

      expect(basket.quantities).toEqual(0);
    });

    it('remove second product', () => {
      basket.addProduct({
        id: 'ID1',
        name: 'P1',
        quantity: 1,
        taxe: 3.0,
        price: 15,
        priceWithTaxe: 18.00,
        category: 'C1'
      });
      basket.addProduct({
          id: 'ID2',
          name: 'P2',
          quantity: 1,
          taxe: 3.00,
          price: 15.00,
          priceWithTaxe: 18.00,
          category: 'C1'
      });

      basket.removeItem('ID2');

      expect(basket.quantities).toEqual(1);
      expect(basket.quantityFor({id: 'ID2', name: 'P2', quantity: 1, taxe: 3.00, price: 15.00, priceWithTaxe: 18.00, category: 'C1'}))
        .toEqual(0);
    });
  });

  describe('empty', () => {
    it('no product added', () => {
      expect(basket.empty).toEqual(true);
    });

    it('a product added', () => {
      basket.addProduct({
          id: 'ID1',
          name: 'P1',
          quantity: 1,
          taxe: 3.00,
          price: 15.00,
          priceWithTaxe: 18.00,
          category: 'C1'
      });

      expect(basket.empty).toEqual(false);
    });
  });
});
