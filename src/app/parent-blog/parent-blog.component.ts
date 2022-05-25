import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-blog',
  templateUrl: './parent-blog.component.html',
  styleUrls: ['./parent-blog.component.scss']
})
export class ParentBlogComponent implements OnInit {
  username: string = 'hello'
  constructor() { 

  }

  ngOnInit(): void {
  }

  //处理子组件的buttonClickedEvent, e就是子组件通过@output事件发送过来的this.userInput
  handleButtonClickedInChild01(e:any) {
    console.log('event', e);
    this.username = e;
  }
}
