import { Component, OnInit } from '@angular/core';
import { LogServiceService } from '../services/log-service.service';

@Component({
  selector: 'app-myc11-goods-admin',
  templateUrl: './myc11-goods-admin.component.html',
  styleUrls: ['./myc11-goods-admin.component.scss']
})
export class Myc11GoodsAdminComponent implements OnInit {

  logService: LogServiceService;
   
  constructor(private logServiceService: LogServiceService,
              variable: LogServiceService) { 
    this.logService = variable;
  }

  ngOnInit(): void {
  }

  addGoods() {
    console.log("add");
    let action = "Add new goods";
    //DI dependency injection
    this.logServiceService.doLog(action);
  }

  removeGoods() {
    console.log("remove ");
    /*
    let uname = "admin3";
    let time = new Date().getTime();
    let action = "Remove new goods";
    console.log(`Administrator ${uname} at the time ${time} do action ${action}`);
    */
    let action ="remove one goods";
    this.logService.doLog(action);
  }
}
