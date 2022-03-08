import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc09-to-do-list',
  templateUrl: './myc09-to-do-list.component.html',
  styleUrls: ['./myc09-to-do-list.component.scss']
})
export class Myc09ToDoListComponent implements OnInit {
  toDoList = ['开会','商科','培训'];
  itemToAdd = '';

  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
    console.log("input",this.itemToAdd)
    this.toDoList.push(this.itemToAdd);
    this.itemToAdd = '';
  }

  removeItem(index: number){
    this.toDoList.splice(index,1);
  }
}
