import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-countdown';
  countdownAliasMsg: string='Hello';

  endCountdown(a:boolean) {
    this.countdownAliasMsg = 'Time up!';

  }
}


// hieu ky cach su dung output truyen tu con len cha nhe!
