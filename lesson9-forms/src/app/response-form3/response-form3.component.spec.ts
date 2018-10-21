import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseForm3Component } from './response-form3.component';

describe('ResponseForm3Component', () => {
  let component: ResponseForm3Component;
  let fixture: ComponentFixture<ResponseForm3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseForm3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseForm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
