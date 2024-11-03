import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  title = 'tabletopic';
  questionSet: string = '';
  subject: string = '';

  onContentSubmitted(contents: string[]) {
    this.subject = contents[0];
    this.questionSet = contents[1];
  }
}
