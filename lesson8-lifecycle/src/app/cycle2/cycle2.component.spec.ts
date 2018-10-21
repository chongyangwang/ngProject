import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cycle2Component } from './cycle2.component';

describe('Cycle2Component', () => {
  let component: Cycle2Component;
  let fixture: ComponentFixture<Cycle2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cycle2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cycle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
