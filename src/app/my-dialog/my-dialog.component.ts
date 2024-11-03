import { Component, Inject, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StopwatchComponent, TimeResult } from '../stopwatch/stopwatch.component';

export interface Data {
  topic: string;
}

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {
  @ViewChild(StopwatchComponent) stopwatch!: StopwatchComponent;
  @Output() receivedTime: TimeResult | null = null;

  topic: string = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Data,
    public dialogRef: MatDialogRef<MyDialogComponent>
) {
    this.topic = data.topic;
  }
  ngOnInit(): void {
    this.dialogRef.backdropClick().subscribe(() => {
      this.onBackdropClick();
    });
  }

  onBackdropClick() {
    this.dialogRef.close(this.receivedTime);
  }

  handleTimeResult(time: TimeResult) {
    this.receivedTime = time;
  }

}
