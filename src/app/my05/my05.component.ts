import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my05',
  templateUrl: './my05.component.html',
  styleUrls: ['./my05.component.scss']
})
export class My05Component implements OnInit {
  uName:string = 'li';
  age:number = 12;
  myTitle:string = "test as a title";
  /*
  constructor(uName:string, age:number)
  { 
    this.uName = uName;
    this.age = age
  }
*/
  ngOnInit(): void {
  }

  btn_press() {
    alert("button is clicked and age is " + this.age);
  }
}
