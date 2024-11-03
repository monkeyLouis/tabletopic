import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { TimeResult } from '../stopwatch/stopwatch.component';

@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.css']
})
export class TopicCardComponent {
  @Input() topic: string = '';
  @Input() num: number = 0;

  centered = false;
  disabled = false;
  unbounded = true;
  radius: number = 100;
  color: string = "rgba(2, 132, 199, 0.5)";

  receivedData: TimeResult | null = null;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '500px',
      panelClass: 'custom-dialog-container',
      exitAnimationDuration: 300,
      enterAnimationDuration: 300,
      data: {
        topic: this.topic,
      },
    });

    dialogRef.beforeClosed().subscribe(() => {
      const instance = dialogRef.componentInstance.stopwatch;
      if (instance && instance.isRunning) {
        instance.stopTimer();
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result) {
        this.receivedData = result;
      }
    });
  }

}
