import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import {AsyncPipe} from "@angular/common";
import {ChangeDetectorRef} from "@angular/core";

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [AsyncPipe, ChangeDetectorRef]});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
