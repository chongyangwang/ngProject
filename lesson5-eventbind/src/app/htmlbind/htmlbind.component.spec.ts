import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlbindComponent } from './htmlbind.component';

describe('HtmlbindComponent', () => {
  let component: HtmlbindComponent;
  let fixture: ComponentFixture<HtmlbindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlbindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlbindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
