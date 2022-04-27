import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //AppModule
})
export class LogServiceService {

  constructor() { }

  doLog(action:string) {
    let uname = "admin2";
    let time = new Date().getTime();
    console.log(`Administrator ${uname} at the time ${time} do action ${action}`);
  }
}
