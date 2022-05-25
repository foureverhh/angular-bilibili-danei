import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-child02-photo',
  templateUrl: './my-child02-photo.component.html',
  styleUrls: ['./my-child02-photo.component.scss']
})
export class MyChild02PhotoComponent implements OnInit {

  @Input()
  photoOwner!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
