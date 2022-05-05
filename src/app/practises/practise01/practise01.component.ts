import { Component, OnInit } from '@angular/core';
import { TimerserviceService } from '../../services/timerservice.service';

@Component({
  selector: 'app-practise01',
  templateUrl: './practise01.component.html',
  styleUrls: ['./practise01.component.scss']
})
export class Practise01Component implements OnInit {
  timeService:TimerserviceService;

  constructor(timer:TimerserviceService) {
    this.timeService = timer;
   }

  ngOnInit(): void {
  }

  doLogin() {
    this.timeService.start();
    // setTimeout(function(){console.log('Processing')}, 3000);
    this.timeService.end('Login')

  }

  doRegister() {  
    this.timeService.start();
    // setTimeout(function(){console.log('Processing')}, 3000);
    this.timeService.end('Register')
  }
}
