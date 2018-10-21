import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceputotalComponent } from './priceputotal.component';

describe('PriceputotalComponent', () => {
  let component: PriceputotalComponent;
  let fixture: ComponentFixture<PriceputotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceputotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceputotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
