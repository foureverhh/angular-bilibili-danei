import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent01 } from './myComponent01';
import { MyC02Component } from './myc02.component';
import { MyC03Component } from './myc03/myc03.component';
import { My05Component } from './my05/my05.component';
import { Myc01BuyCountComponent } from './myc01-buy-count/myc01-buy-count.component';
import { Myc02NgforComponent } from './myc02-ngfor/myc02-ngfor.component';
import { Myc06StyleComponent } from './myc06-style/myc06-style.component';
import { Myc07SwitchComponent } from './myc07-switch/myc07-switch.component';
import { Myc08NgModelComponent } from './myc08-ng-model/myc08-ng-model.component';
import { FormsModule } from '@angular/forms';
import { XuYaoQiangDiaoDirective } from './self-define-directive/xuYaoQiangDiao/xu-yao-qiang-diao.directive';
import { Myc09ToDoListComponent } from './myc09-to-do-list/myc09-to-do-list.component';
import { Myc10EmpTableComponent } from './myc10-emp-table/myc10-emp-table.component';
import { GenderPipe } from './filter/gender.pipe';
import { PoliticPipePipe } from './filter/politic-pipe.pipe';
import { Myc11GoodsAdminComponent } from './myc11-goods-admin/myc11-goods-admin.component';
import { HttpClientModule } from '@angular/common/http';
import { Myc12HttpClientComponent } from './myc12-http-client/myc12-http-client.component';
import { Practise01Component } from './practises/practise01/practise01.component';
import { My69ProductlistComponent } from './my69-productlist/my69-productlist.component';
import { ParentBlogComponent } from './parent-blog/parent-blog.component';
import { Child01ModifyComponent } from './child01-modify/child01-modify.component';
import { Child02PhotoComponent } from './child02-photo/child02-photo.component';

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
    Myc08NgModelComponent,
    XuYaoQiangDiaoDirective,
    Myc09ToDoListComponent,
    Myc10EmpTableComponent,
    GenderPipe,
    PoliticPipePipe,
    Myc11GoodsAdminComponent,
    Myc12HttpClientComponent,
    Practise01Component,
    My69ProductlistComponent,
    ParentBlogComponent,
    Child01ModifyComponent,
    Child02PhotoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
