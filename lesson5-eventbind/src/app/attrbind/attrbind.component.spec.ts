import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrbindComponent } from './attrbind.component';

describe('AttrbindComponent', () => {
  let component: AttrbindComponent;
  let fixture: ComponentFixture<AttrbindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttrbindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrbindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
