import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanydescComponent } from './companydesc.component';

describe('CompanydescComponent', () => {
  let component: CompanydescComponent;
  let fixture: ComponentFixture<CompanydescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanydescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanydescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
