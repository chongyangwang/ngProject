import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CauserComponent } from './causer.component';

describe('CauserComponent', () => {
  let component: CauserComponent;
  let fixture: ComponentFixture<CauserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CauserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CauserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
