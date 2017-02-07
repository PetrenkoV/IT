import { AppRoutingModule } from './app-routing.module';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { AppComponent }  from './app.component';

import { HttpModule, JsonpModule } from '@angular/http';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductComponent} from './product/product.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule, AppRoutingModule],
  declarations: [ AppComponent,ProductDetailComponent,PageNotFoundComponent,ProductComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
