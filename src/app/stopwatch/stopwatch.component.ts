import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent {

  minutes: number = 0;
  seconds: number = 0;
  centiseconds: number = 0;
  timer: any;
  isRunning: boolean = false;

  @Output() timeResult = new EventEmitter<TimeResult>();

  startStopToggle() {
    if(this.isRunning) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
  }

  resetTimer() {
    this.stopTimer();
    this.minutes = 0;
    this.seconds = 0;
    this.centiseconds = 0;
    this.sendResult(undefined);
  }

  startTimer() {
    this.isRunning = true;
    this.timer = setInterval(() => {
      this.centiseconds += 1;
      if(this.centiseconds >= 100) {
        this.centiseconds %= 100;
        this.seconds++;
      }
      if (this.seconds >= 60) {
        this.seconds = 0;
        this.minutes++;
      }
    }, 8);
  }

  stopTimer() {
    this.isRunning = false;
    let timeResult = {
      minutes: this.minutes,
      seconds: this.seconds,
      centiseconds: this.centiseconds
    };
    this.sendResult(timeResult);
    clearInterval(this.timer);
  }

  sendResult(result?: TimeResult) {
    this.timeResult.emit(result);
  }
}

export interface TimeResult {
  minutes: number;
  seconds: number;
  centiseconds: number;
}