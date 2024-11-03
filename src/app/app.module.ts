import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'; 
import { MatInputModule } from '@angular/material/input';

import { GptinputComponent } from './gptinput/gptinput.component';
import { PlaygroundComponent } from './playground/playground.component';
import { TopicCardComponent } from './topic-card/topic-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { MatRippleModule } from '@angular/material/core';
import { StopwatchComponent } from './stopwatch/stopwatch.component';


@NgModule({
  declarations: [
    AppComponent,
    GptinputComponent,
    PlaygroundComponent,
    TopicCardComponent,
    MyDialogComponent,
    StopwatchComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule, 
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
