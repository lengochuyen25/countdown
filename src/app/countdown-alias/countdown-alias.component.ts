import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-countdown-alias',
  templateUrl: './countdown-alias.component.html',
  styleUrls: ['./countdown-alias.component.css']
})
export class CountdownAliasComponent implements OnInit, OnDestroy, OnChanges {
  private intervalId = 0;
  message = '';
  remainingTime: number;

  @Input('remaining-time')
  seconds = 11;

  ngOnChanges(changes: SimpleChanges) {
    if ('seconds' in changes) {
      let v = changes.seconds.currentValue;
      v = typeof v === 'undefined' ? 11 : v;
      const vFixed = Number(v);
      this.seconds = Number.isNaN(vFixed) ? 11 : vFixed;

    }
  }

  clearTime() {
    clearInterval(this.intervalId);
  }

  ngOnInit() {
    this.reset();
    this.start();
  }


  ngOnDestroy() {
    this.clearTime();
  }

  start() {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }

  }

  stop() {
    this.clearTime();
    this.message = `Holding at T-${this.remainingTime} seconds`;
  }

  reset() {
    this.clearTime();
    this.remainingTime = this.seconds;
    this.message = `Click start to button to start the Countdown`;

  }

  private countDown() {
    this.clearTime();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = 'Blast off!';
        this.clearTime();
      } else {
        this.message = `T-${this.remainingTime} seconds and counting`;
      }
    }, 1000);

  }
}
