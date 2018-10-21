import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatmoneyComponent } from './chatmoney.component';

describe('ChatmoneyComponent', () => {
  let component: ChatmoneyComponent;
  let fixture: ComponentFixture<ChatmoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatmoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatmoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
