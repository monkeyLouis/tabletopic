import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent {
  @Input() content: string = ''; // 接收來自父元件的內容
  @Input() subject: string = '';
  dataArray: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['content'] && this.content) {
      this.parseContent(this.content);
    }
  }

  parseContent(content: string): void {
    this.dataArray = content.split('\n').map(item => item.trim());
    console.log(this.dataArray);
  }

}
