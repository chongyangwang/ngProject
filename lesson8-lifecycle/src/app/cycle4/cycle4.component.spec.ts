import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cycle4Component } from './cycle4.component';

describe('Cycle4Component', () => {
  let component: Cycle4Component;
  let fixture: ComponentFixture<Cycle4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cycle4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cycle4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
