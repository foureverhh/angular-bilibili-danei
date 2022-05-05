import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerserviceService {

  starTime:number = 0;
  endTime:number = 0;

  constructor() { }

  start() {
    console.log("aciton start")
    this.starTime = new Date().getTime();
  }

  end(action: string) {
    setTimeout(() => { 
        this.endTime = new Date().getTime();
        console.log(action + " consumes ", this.endTime - this.starTime);
    }, 1000);
  }
}
