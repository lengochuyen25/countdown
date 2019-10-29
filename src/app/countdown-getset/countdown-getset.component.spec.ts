import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownGetsetComponent } from './countdown-getset.component';

describe('CountdownGetsetComponent', () => {
  let component: CountdownGetsetComponent;
  let fixture: ComponentFixture<CountdownGetsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownGetsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownGetsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
