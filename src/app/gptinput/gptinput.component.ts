import { Component, signal, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import { merge } from 'rxjs';

@Component({
  selector: 'app-gptinput',
  templateUrl: './gptinput.component.html',
  styleUrls: ['./gptinput.component.css']
})
export class GptinputComponent {

  showCard = false;
  readonly inputValue = new FormControl('', [Validators.required]);
  inputValueErr = signal('');

  readonly subject = new FormControl('', [Validators.required]);
  subjectErr = signal('');

  @Output()
  submittedContent = new EventEmitter<string[]>();

  constructor() {
    merge(this.inputValue.statusChanges, this.inputValue.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.inputValue.hasError('required')) {
      this.inputValueErr.set('You must enter a value');
    } else {
      this.inputValueErr.set('');
    }

    if (this.subject.hasError('required')) {
      this.subjectErr.set('You must enter a value');
    } else {
      this.subjectErr.set('');
    }
    
  }

  adjustTextareaHeight(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto'; // 重置高度
    textarea.style.height = `${textarea.scrollHeight}px`; // 根據內容調整高度
  }

  toggleCard() {
    this.showCard = !this.showCard;
  }

  onSubmit() {
    if(this.isValid()) {
      let arr = [];
      arr.push(this.subject.value || '');
      arr.push(this.inputValue.value || '');
      this.submittedContent.emit(arr);
    }
  }

  isValid() {
    return this.inputValue.valid && this.subject.valid;
  }
}
