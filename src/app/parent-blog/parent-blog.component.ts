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

}
