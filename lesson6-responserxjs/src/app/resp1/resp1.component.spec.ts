import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Resp1Component } from './resp1.component';

describe('Resp1Component', () => {
  let component: Resp1Component;
  let fixture: ComponentFixture<Resp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Resp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Resp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
