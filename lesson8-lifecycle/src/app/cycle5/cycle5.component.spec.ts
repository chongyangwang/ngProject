import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cycle5Component } from './cycle5.component';

describe('Cycle5Component', () => {
  let component: Cycle5Component;
  let fixture: ComponentFixture<Cycle5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cycle5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cycle5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
