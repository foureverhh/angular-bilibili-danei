import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-myc08-ng-model',
  templateUrl: './myc08-ng-model.component.html',
  styleUrls: ['./myc08-ng-model.component.scss']
})
export class Myc08NgModelComponent implements OnInit {

  uName = "d";
  userInput = '';
  propt = '密码长度应该在6-12之间';

  constructor() { }

  ngOnInit(): void {
  }

  doUNameChange() {
    console.log("ngModleChange()", this.uName);
  }

  userInputChange() {
    if(this.userInput.length > 12) {
      this.propt = "input too long";
    } else if(this.userInput.length < 6){
      this.propt = 'input too short';
    } else {
      this.propt = 'input length is perfect'
    }
  }
}
