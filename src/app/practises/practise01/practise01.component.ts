import { Component, OnInit } from '@angular/core';
import { TimerserviceService } from '../../services/timerservice.service';

@Component({
  selector: 'app-practise01',
  templateUrl: './practise01.component.html',
  styleUrls: ['./practise01.component.scss']
})
export class Practise01Component implements OnInit {

  constructor(private timer:TimerserviceService) {

  }

  ngOnInit(): void {
  }

  doLogin() {
    this.timer.start();
    // setTimeout(function(){console.log('Processing')}, 3000);
    this.timer.end('Login')

  }

  doRegister() {  
    this.timer.start();
    // setTimeout(function(){console.log('Processing')}, 3000);
    this.timer.end('Register')
  }
}
