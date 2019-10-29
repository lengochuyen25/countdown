import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownEventComponent } from './countdown-event.component';

describe('CountdownEventComponent', () => {
  let component: CountdownEventComponent;
  let fixture: ComponentFixture<CountdownEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
