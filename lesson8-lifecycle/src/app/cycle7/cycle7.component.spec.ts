import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cycle7Component } from './cycle7.component';

describe('Cycle7Component', () => {
  let component: Cycle7Component;
  let fixture: ComponentFixture<Cycle7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cycle7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cycle7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
