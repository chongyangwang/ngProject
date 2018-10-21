import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseForm2Component } from './response-form2.component';

describe('ResponseForm2Component', () => {
  let component: ResponseForm2Component;
  let fixture: ComponentFixture<ResponseForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseForm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
