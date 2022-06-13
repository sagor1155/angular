import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingTrackbyComponent } from './using-trackby.component';

describe('UsingTrackbyComponent', () => {
  let component: UsingTrackbyComponent;
  let fixture: ComponentFixture<UsingTrackbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingTrackbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingTrackbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
