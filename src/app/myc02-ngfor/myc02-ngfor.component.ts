import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc02-ngfor',
  templateUrl: './myc02-ngfor.component.html',
  styleUrls: ['./myc02-ngfor.component.scss']
})
export class Myc02NgforComponent implements OnInit {
  empList = ['亮亮', '然然', '东东', '涛涛'];
  age = 20;
  isMember = true;
  constructor() { }

  ngOnInit(): void {
  }

}
