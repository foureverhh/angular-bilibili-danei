import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-child01-modify',
  templateUrl: './my-child01-modify.component.html',
  styleUrls: ['./my-child01-modify.component.scss']
})
export class MyChild01ModifyComponent implements OnInit {
  username!:string;

  @Output()
  usernameModificationEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  modifyUsername() {
    this.usernameModificationEvent.emit(this.username);
  }
}
