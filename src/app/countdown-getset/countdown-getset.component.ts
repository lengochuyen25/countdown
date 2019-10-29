import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-getset',
  templateUrl: './countdown-getset.component.html',
  styleUrls: ['./countdown-getset.component.css']
})
export class CountdownGetsetComponent implements OnInit, OnDestroy {
  private intervalId = 0;
  message = '';
  remainingTime: number;

  private _seconds = 11;
  @Input()
  get seconds(): number {
    return this._seconds;
  }

  set seconds(v) {
    const vFixed = Number(v);
    this._seconds = Number.isNaN(vFixed) ? 11 : vFixed;
  }

  clearTime() {
    clearInterval(this.intervalId);
  }

  constructor() {
  }

  ngOnInit() {
    this.reset();
    this.start();
  }

  ngOnDestroy(): void {
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
    this.message = `Click start button ti start the Countdown`;
  }

  private countDown() {
    this.clearTime();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = `Blast off!`;
        this.clearTime();
      } else {
        this.message = `T-${this.remainingTime} seconds and counting`;
      }
    }, 1000);
  }
}
