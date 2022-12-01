import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { BasketComponent } from './basket/basket.component';
import {RoutingModule} from "./routing.module";
import {HomeComponent} from "./home/home.component";
import {FormsModule} from "@angular/forms";
import {AsyncPipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent, //Could be inside another module.
    BasketComponent, //Could be inside another model.
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
  ],
  providers: [AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
