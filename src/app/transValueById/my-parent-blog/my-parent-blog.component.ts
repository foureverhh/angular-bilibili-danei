import { Component, OnInit, ViewChild } from '@angular/core';

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
  //print all elements with # id
  @ViewChild('parent', {static: true})
  private parent: any;
  @ViewChild('child1', {static: true})
  private child1: any;
  @ViewChild('child2', {static: true})
  private child2: any;
  printWithId() {
    console.log('parent', this.parent);
    console.log('child1', this.child1);
    console.log('child2', this.child2);
    this.child2.photoOwner = 'Tom';
    this.child1.usernameModificationEvent.emit('Haha');
  }
} 
