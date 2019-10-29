import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownEventAliasComponent } from './countdown-event-alias.component';

describe('CountdownEventAliasComponent', () => {
  let component: CountdownEventAliasComponent;
  let fixture: ComponentFixture<CountdownEventAliasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownEventAliasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownEventAliasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
