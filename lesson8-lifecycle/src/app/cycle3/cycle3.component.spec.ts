import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cycle3Component } from './cycle3.component';

describe('Cycle3Component', () => {
  let component: Cycle3Component;
  let fixture: ComponentFixture<Cycle3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cycle3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cycle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
