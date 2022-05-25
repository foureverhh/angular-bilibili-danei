import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child01-modify',
  templateUrl: './child01-modify.component.html',
  styleUrls: ['./child01-modify.component.scss']
})
export class Child01ModifyComponent implements OnInit {
  
  userInput!:string;

  @Output() //事件发射器，输出型属性，可以向父组件输出数据 @angular/core
  buttonClickedEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeUserName() {
    console.log('userInput', this.userInput);
    //子组件向父组件发射this.userInput数据
    this.buttonClickedEvent.emit(this.userInput);
  }
}
