import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cycle6Component } from './cycle6.component';

describe('Cycle6Component', () => {
  let component: Cycle6Component;
  let fixture: ComponentFixture<Cycle6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cycle6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cycle6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
