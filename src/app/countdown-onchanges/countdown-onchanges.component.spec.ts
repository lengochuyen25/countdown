import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownOnchangesComponent } from './countdown-onchanges.component';

describe('CountdownOnchangesComponent', () => {
  let component: CountdownOnchangesComponent;
  let fixture: ComponentFixture<CountdownOnchangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownOnchangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownOnchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
