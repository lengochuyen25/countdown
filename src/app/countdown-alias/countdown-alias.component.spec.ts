import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownAliasComponent } from './countdown-alias.component';

describe('CountdownAliasComponent', () => {
  let component: CountdownAliasComponent;
  let fixture: ComponentFixture<CountdownAliasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownAliasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownAliasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
