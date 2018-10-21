import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssbindComponent } from './cssbind.component';

describe('CssbindComponent', () => {
  let component: CssbindComponent;
  let fixture: ComponentFixture<CssbindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssbindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssbindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
