import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GptinputComponent } from './gptinput.component';

describe('GptinputComponent', () => {
  let component: GptinputComponent;
  let fixture: ComponentFixture<GptinputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GptinputComponent]
    });
    fixture = TestBed.createComponent(GptinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
