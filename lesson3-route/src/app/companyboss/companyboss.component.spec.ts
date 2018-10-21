import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanybossComponent } from './companyboss.component';

describe('CompanybossComponent', () => {
  let component: CompanybossComponent;
  let fixture: ComponentFixture<CompanybossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanybossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanybossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
