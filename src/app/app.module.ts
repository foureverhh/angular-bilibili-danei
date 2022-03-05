import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent01 } from './myComponent01';
import { MyC02Component } from './myc02.component';
import { MyC03Component } from './myc03/myc03.component';
import { My05Component } from './my05/my05.component';
import { Myc01BuyCountComponent } from './myc01-buy-count/myc01-buy-count.component';
import { Myc02NgforComponent } from './myc02-ngfor/myc02-ngfor.component';
import { Myc06StyleComponent } from './myc06-style/myc06-style.component';
import { Myc07SwitchComponent } from './myc07-switch/myc07-switch.component'



@NgModule({
  declarations: [
    AppComponent,
    MyComponent01,
    MyC02Component,
    MyC03Component,
    My05Component,
    Myc01BuyCountComponent,
    Myc02NgforComponent,
    Myc06StyleComponent,
    Myc07SwitchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
