import {ComponentFixture, TestBed} from "@angular/core/testing";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./home.component";
import {ProductComponent} from "../product/product.component";
import {AsyncPipe} from "@angular/common";
import {ChangeDetectorRef, NO_ERRORS_SCHEMA} from "@angular/core";
import {ProductService} from "../product/product.service";
import {Basket} from "../basket/basket";
import {allProducts} from "../product/products";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let productService: ProductService;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ HomeComponent, ProductComponent ],
      imports: [ FormsModule ],
      providers: [ ProductService, Basket, AsyncPipe, ChangeDetectorRef],
    })
      .compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    productService = TestBed.inject(ProductService);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  describe('fetch products', () => {
    it('empty category filter', () => {
      component.categoryFilter = "";

      component.fetchProducts();

      expect(component.products).toEqual(allProducts());
    });

    it('category filter', () => {
      component.categoryFilter = "Food";

      component.fetchProducts();

      expect(component.products).toEqual(allProducts().filter(product => product.category === component.categoryFilter));
    });
  });
});
