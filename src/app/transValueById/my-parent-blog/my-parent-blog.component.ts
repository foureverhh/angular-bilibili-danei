import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-parent-blog',
  templateUrl: './my-parent-blog.component.html',
  styleUrls: ['./my-parent-blog.component.scss']
})
export class MyParentBlogComponent implements OnInit {
  username: string = 'Jim';
  constructor() { }

  ngOnInit(): void {
  }

  modifyUserName(event: any) {
    this.username = event;
  }
}
