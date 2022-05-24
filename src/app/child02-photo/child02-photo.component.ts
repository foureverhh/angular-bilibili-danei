import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child02-photo',
  templateUrl: './child02-photo.component.html',
  styleUrls: ['./child02-photo.component.scss']
})
export class Child02PhotoComponent implements OnInit {
  //@Input 输入型属性，父组件利用这种属性传值进来
  @Input()
  child2Name!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
