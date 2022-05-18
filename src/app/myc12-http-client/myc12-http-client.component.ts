import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';

@Component({
  selector: 'app-myc12-http-client',
  templateUrl: './myc12-http-client.component.html',
  styleUrls: ['./myc12-http-client.component.scss']
})
export class Myc12HttpClientComponent implements OnInit {
  httpClient: HttpClient;
  users: User[] = [];
  constructor(
    client:HttpClient,
    ) { 
    this.httpClient = client;
  }

  ngOnInit(): void {
  }

  loadGoods() {
    let url = 'https://jsonplaceholder.typicode.com/todos';
    this.httpClient.get(url).subscribe((res) => {
      this.users = JSON.parse(JSON.stringify(res));
      this.users.forEach(user => {
        console.log(user.completed + ", " + user.id);
      })
    });
    ;
  }
}
