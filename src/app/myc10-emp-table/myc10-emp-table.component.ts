import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc10-emp-table',
  templateUrl: './myc10-emp-table.component.html',
  styleUrls: ['./myc10-emp-table.component.scss']
})
export class Myc10EmpTableComponent implements OnInit {

  empList = [
    {eid: 101, ename:'name1', salary: 50000.12345, birthday:  0, gender: 1, politic: 10 },
    {eid: 102, ename:'name2', salary: 12344, birthday:  0, gender: 0, politic: 20 },
    {eid: 103, ename:'name3', salary: 5000.12567, birthday:  0, gender: 1, politic: 30 },
    {eid: 104, ename:'name4', salary: 800, birthday:  0, gender: 0, politic: 20 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  removeEmp(index: number) {
    this.empList.splice(index,1);
  }
}
