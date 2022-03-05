import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc06-style',
  templateUrl: './myc06-style.component.html',
  styleUrls: ['./myc06-style.component.scss']
})
export class Myc06StyleComponent implements OnInit {
  // [ngSytle] obj
  myStyleObj06 = {
    color : 'black',
    'backgrund-color':'pink',
    border : '2px solid blue'
  }

  // [ngClass] obj, to invoke class in sytle.scss
  myClassObj06 = {
    'btn-my' : true,
    'btn-my-a' : true,
    'btn-my-b' : true
  }

  textMute = {
    'text-muted' : false
  }

  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< HEAD
  loadMore() {
    this.myStyleObj06.border = '2px dotted darkblue';
    this.myStyleObj06['backgrund-color'] = 'purple';
  }

  loadMore2() {
    this.myClassObj06['btn-my-b'] = false;
  }

  mute() {
    this.textMute['text-muted'] = !this.textMute['text-muted'];
  }
=======
>>>>>>> d889d17a10dcb06777bb577b7753f182c281879a
}
