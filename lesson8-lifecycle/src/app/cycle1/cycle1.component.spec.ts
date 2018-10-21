import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cycle1Component } from './cycle1.component';

describe('Cycle1Component', () => {
  let component: Cycle1Component;
  let fixture: ComponentFixture<Cycle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cycle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cycle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
