import { BrowserModule } from '@angular/platform-browser';
import { Component } from "@angular/core";

//装饰器Decorator -- 用于指定class的用途,其本质是一个函数，用于指定一个class的用途
@Component({
    template: '<h2>组件01</h2><hr><app-myc02></app-myc02><h2>组件01</h2>',
    selector: 'app-myc01'
})
export class MyComponent01 {

}