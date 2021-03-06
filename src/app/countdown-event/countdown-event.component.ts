import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-countdown-event',
  templateUrl: './countdown-event.component.html',
  styleUrls: ['./countdown-event.component.css']
})
export class CountdownEventComponent implements OnInit, OnChanges, OnDestroy {
  private intervalId = 0;
  message = '';
  remainingTime: number;

  @Input()
  seconds = 11;
  @Output()
  finish = new EventEmitter<boolean>();

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
    this.message = `Click start button to start the Countdown`;

  }

  private countDown() {
    this.clearTime();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = 'Blast off!';
        this.clearTime();
        this.finish.emit(true);
      } else {
        this.message = `T-${this.remainingTime} seconds and counting`;
      }
    }, 1000);

  }
}
