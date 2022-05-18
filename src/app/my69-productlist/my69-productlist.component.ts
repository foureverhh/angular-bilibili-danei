import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserBase } from '../models/UserBase';

@Component({
  selector: 'app-my69-productlist',
  templateUrl: './my69-productlist.component.html',
  styleUrls: ['./my69-productlist.component.scss']
})
export class My69ProductlistComponent implements OnInit {

  users: User[] = [];

  constructor(private httpClient: HttpClient) {
   this.getUsers();
  }

  ngOnInit(): void {

  }

  deleleUser(index: number) {
    this.users.splice(index, 1);
  }

  reloadUsers() {
    this.getUsers();
  }

  getUsers() {
    this.httpClient.get<User[]>("https://jsonplaceholder.typicode.com/users")
      .subscribe(res => this.users = res);
  }
}


