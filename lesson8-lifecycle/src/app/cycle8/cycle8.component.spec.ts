import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cycle8Component } from './cycle8.component';

describe('Cycle8Component', () => {
  let component: Cycle8Component;
  let fixture: ComponentFixture<Cycle8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cycle8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cycle8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
