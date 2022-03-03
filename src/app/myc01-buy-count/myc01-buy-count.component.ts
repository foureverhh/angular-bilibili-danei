import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc01-buy-count',
  templateUrl: './myc01-buy-count.component.html',
  styleUrls: ['./myc01-buy-count.component.css']
})
export class Myc01BuyCountComponent implements OnInit {
  count: number = 0;
  imgUrl: string = 'a.jpg';

  ngOnInit(): void {
  
  }

  add() {
    this.count++;
  }

  minus() {
    this.count--;
  }
}
