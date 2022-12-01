import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {ProductComponent} from "./product/product.component";

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ProductComponent,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return products', () => {
    expect(component.products).toEqual([
      {name: 'Bob l\'éponge', category: 'figurine', price: 10},
      {name: 'Livre d\'or', category: 'note', price: 30},
      {name: 'Casrole', category: 'Ustensile', price: 25},
      {name: 'Don', category: 'Charity', price: 5},
    ]);
  });
});
