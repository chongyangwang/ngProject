import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Resp2Component } from './resp2.component';

describe('Resp2Component', () => {
  let component: Resp2Component;
  let fixture: ComponentFixture<Resp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Resp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Resp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
