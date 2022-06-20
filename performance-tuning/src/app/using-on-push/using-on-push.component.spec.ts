import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingOnPushComponent } from './using-on-push.component';

describe('UsingOnPushComponent', () => {
  let component: UsingOnPushComponent;
  let fixture: ComponentFixture<UsingOnPushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingOnPushComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingOnPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
