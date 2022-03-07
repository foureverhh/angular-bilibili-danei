import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appXuYaoQiangDiao]'
})
export class XuYaoQiangDiaoDirective {

  constructor( el: ElementRef ) { 
    console.log("el",el);
    console.log("xuYaoQiangDiao", "directive constructor is called")
    el.nativeElement.style.background = '#fcc'
    el.nativeElement.style.padding = '10px'
    el.nativeElement.style.color = '#833'
  }

}
